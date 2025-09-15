import React from "react";

const Templates = () => {
  // Mock template data (later connect to Supabase)
  const templates = [
    {
      id: 1,
      name: "Cold Outreach",
      content: "Hey {{firstName}}, I came across your profile and...",
    },
    {
      id: 2,
      name: "Follow-up 1",
      content: "Just checking if you had a chance to see my last message...",
    },
    {
      id: 3,
      name: "Closing DM",
      content: "Happy to jump on a quick call if this looks relevant to you!",
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Message Templates</h1>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md">
          + Add Template
        </button>
      </div>

      {/* Templates List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white shadow rounded-lg p-4 border border-gray-200 hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-gray-800 text-lg mb-2">
              {template.name}
            </h2>
            <p className="text-gray-600 text-sm line-clamp-3">
              {template.content}
            </p>

            {/* Actions */}
            <div className="flex justify-end mt-4 space-x-3">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                Delete
              </button>
            </div>
          </div>
        ))}

        {templates.length === 0 && (
          <div className="col-span-full text-center text-gray-500 py-10">
            No templates found. Start by adding your first one!
          </div>
        )}
      </div>
    </div>
  );
};

export default Templates;
