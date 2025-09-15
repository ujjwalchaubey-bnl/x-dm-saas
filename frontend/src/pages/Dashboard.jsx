import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Dashboard = () => {
  const { supabase, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Logout error:", error.message);
    } else {
      setUser(null);
      navigate("/login");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">X-DM SaaS</h2>

        <nav className="flex flex-col gap-4">
          <NavLink
            to="/dashboard/campaigns"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-green-500 text-white" : "hover:bg-gray-700"
              }`
            }
          >
            Campaigns
          </NavLink>
          <NavLink
            to="/dashboard/leads"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-green-500 text-white" : "hover:bg-gray-700"
              }`
            }
          >
            Leads
          </NavLink>
          <NavLink
            to="/dashboard/templates"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-green-500 text-white" : "hover:bg-gray-700"
              }`
            }
          >
            Templates
          </NavLink>
          <NavLink
            to="/dashboard/billing"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium ${
                isActive ? "bg-green-500 text-white" : "hover:bg-gray-700"
              }`
            }
          >
            Billing
          </NavLink>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-700">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Logout
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {/* Dashboard Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-lg font-medium text-gray-500">Credits</h3>
              <p className="text-2xl font-bold text-gray-800">2,000</p>
            </div>
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-lg font-medium text-gray-500">Campaigns</h3>
              <p className="text-2xl font-bold text-gray-800">5</p>
            </div>
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-lg font-medium text-gray-500">Leads</h3>
              <p className="text-2xl font-bold text-gray-800">120</p>
            </div>
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-lg font-medium text-gray-500">Messages Sent</h3>
              <p className="text-2xl font-bold text-gray-800">1,850</p>
            </div>
          </div>

          {/* Nested Pages */}
          <div className="bg-white shadow rounded-xl p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
