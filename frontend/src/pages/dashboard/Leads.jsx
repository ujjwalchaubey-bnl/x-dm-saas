import React from "react";

const Leads = () => {
  // Mock leads (replace later with Supabase data)
  const leads = [
    { id: 1, name: "John Doe", email: "john@example.com", company: "Acme Inc." },
    { id: 2, name: "Jane Smith", email: "jane@example.com", company: "Beta LLC" },
    { id: 3, name: "Mike Ross", email: "mike@example.com", company: "Gamma Co." },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Leads</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md">
          + Add Lead
        </button>
      </div>

      {/* Leads Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Company
              </th>
              <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr
                key={lead.id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2 text-sm text-gray-800">{lead.name}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{lead.email}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{lead.company}</td>
                <td className="px-4 py-2 text-center">
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="px-4 py-6 text-center text-gray-500 text-sm"
                >
                  No leads found. Add some leads to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leads;
