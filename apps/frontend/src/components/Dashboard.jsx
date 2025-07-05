import React, { useState } from "react";
import Form from "./Form";
import DisplayCard from "./DisplayCard";

const initialState = {
  name: "",
  location: "",
};

export default function Dashboard() {
  const [form, setForm] = useState(initialState);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [regenerating, setRegenerating] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.location.trim()) {
      setError("Please enter both Business Name and Location.");
      return;
    }
    setLoading(true);
    setData(null); // Clear previous data
    setError("");
    try {
      const res = await fetch("http://localhost:4000/business-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      if (res.ok) {
        setData(result);
      } else {
        setError(result.error || "Failed to fetch business data.");
      }
    } catch {
      setError("Failed to fetch business data. Is the backend server running?");
    }
    setLoading(false);
  };

  const regenerateHeadline = async () => {
    if (!form.name.trim() || !form.location.trim()) return;
    setRegenerating(true);
    try {
      const res = await fetch(
        `http://localhost:4000/regenerate-headline?name=${encodeURIComponent(
          form.name
        )}&location=${encodeURIComponent(form.location)}`
      );
      const result = await res.json();
      if (res.ok) {
        setData((prev) => ({ ...prev, headline: result.headline }));
      } else {
        setError(result.error || "Failed to regenerate headline.");
      }
    } catch {
      setError("Failed to regenerate headline. Is the backend server running?");
    }
    setRegenerating(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-6 p-4">
      <div className="w-full max-w-2xl">
        <Form
          form={form}
          onChange={handleChange}
          onSubmit={handleSubmit}
          loading={loading}
          error={error}
        />
      </div>

      {data && (
        <div className="w-full max-w-md animate-fade-in">
          <DisplayCard
            key={form.name}
            data={data}
            onRegenerate={regenerateHeadline}
            regenerating={regenerating}
          />
        </div>
      )}
    </div>
  );
}