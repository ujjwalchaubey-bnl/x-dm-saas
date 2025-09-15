import React from "react";

const Campaigns = () => {
  // Mock campaign data (later connect to Supabase)
  const campaigns = [
    { id: 1, name: "Outreach Campaign A", status: "Active", sent: 120 },
    { id: 2, name: "Launch Promo B", status: "Paused", sent: 75 },
    { id: 3, name: "Follow-up Campaign C", status: "Completed", sent: 200 },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Campaigns</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md">
          + New Campaign
        </button>
      </div>

      {/* Campaigns Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                DMs Sent
              </th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr
                key={campaign.id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2 text-sm text-gray-800">
                  {campaign.name}
                </td>
                <td className="px-4 py-2 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      campaign.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : campaign.status === "Paused"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-600">
                  {campaign.sent}
                </td>
                <td className="px-4 py-2 text-center">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mr-3">
                    View
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm font-medium mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {campaigns.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="px-4 py-6 text-center text-gray-500 text-sm"
                >
                  No campaigns found. Create your first campaign to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Campaigns;
