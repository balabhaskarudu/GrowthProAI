import React from "react";
import StarIcon from "./StarIcon";
import RefreshIcon from "./RefreshIcon";
import Spinner from "./Spinner";

export default function DisplayCard({ data, headlineLoading, onRegenerate }) {
  if (!data) return null;
  return (
    <div className="mt-8 p-6 rounded-xl bg-white/90 shadow-lg border border-gray-100 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="text-3xl font-bold text-yellow-500 flex items-center">
            <StarIcon />
            <span className="ml-2">{data.rating}</span>
          </div>
          <div className="text-gray-600 text-sm">
            {data.reviews} Google reviews
          </div>
        </div>
        <div className="flex-1">
          <div className="text-lg font-semibold text-gray-800 mt-4 sm:mt-0">
            <span className="block">{data.headline}</span>
          </div>
          <button
            onClick={onRegenerate}
            className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-lg font-semibold shadow hover:scale-105 transition-transform duration-200 flex items-center"
            disabled={headlineLoading}
          >
            {headlineLoading ? (
              <>
                <Spinner size={4} /> <span className="ml-2">Regenerating...</span>
              </>
            ) : (
              <>
                <RefreshIcon /> <span className="ml-2">Regenerate SEO Headline</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
