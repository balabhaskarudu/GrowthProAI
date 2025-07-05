import React from "react";
import Spinner from "./Spinner";

export default function Form({ form, onChange, onSubmit, loading, error }) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-300 mb-2"
        >
          Business Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="e.g. Cake & Co"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          required
        />
      </div>
      <div>
        <label
          htmlFor="location"
          className="block text-lg font-medium text-gray-300 mb-2"
        >
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          value={form.location}
          onChange={onChange}
          placeholder="e.g. Mumbai"
          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          required
        />
      </div>
      
      {error && <p className="text-sm text-red-500 text-center pt-2">{error}</p>}
      
      <div className="pt-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? <Spinner size="6" /> : "Get Business Data"}
        </button>
      </div>
    </form>
  );
}
