import React from "react";

const Billing = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Billing & Plans</h1>

      {/* Current Plan */}
      <div className="bg-white shadow rounded-lg p-6 border border-gray-200 mb-8">
        <h2 className="text-lg font-semibold text-gray-700">Current Plan</h2>
        <p className="text-gray-600 mt-2">
          You are currently on the <span className="font-semibold">Free</span> plan.
        </p>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md">
          Upgrade Plan
        </button>
      </div>

      {/* Available Plans */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Available Plans</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Free Plan */}
        <div className="bg-white shadow rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800">Free</h3>
          <p className="text-gray-600 mt-2">100 DMs / month</p>
          <p className="text-2xl font-bold mt-4">$0</p>
          <button className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-lg w-full">
            Current Plan
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white shadow rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800">Pro</h3>
          <p className="text-gray-600 mt-2">3,000 DMs / month</p>
          <p className="text-2xl font-bold mt-4">$29</p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full">
            Choose Plan
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white shadow rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-800">Enterprise</h3>
          <p className="text-gray-600 mt-2">10,000+ DMs / month</p>
          <p className="text-2xl font-bold mt-4">Custom</p>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg w-full">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billing;
