import React from 'react';
import Dashboard from './components/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex flex-col items-center p-4">
      <header className="w-full max-w-4xl mx-auto text-center py-8">
        <h1 className="text-4xl font-bold text-gray-100">
          GrowthProAI Mini Dashboard
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          Simulating SEO and Google Business data for local businesses.
        </p>
      </header>
      <main className="w-full flex-grow flex justify-center items-center">
         <Dashboard />
      </main>
    </div>
  );
}