import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "220px",
          background: "#111",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <h2 style={{ marginBottom: "2rem" }}>X-DM SaaS</h2>

        <NavLink
          to="/dashboard/campaigns"
          style={({ isActive }) => ({
            padding: "0.5rem 0",
            color: isActive ? "#4ade80" : "#fff",
            textDecoration: "none",
          })}
        >
          Campaigns
        </NavLink>

        <NavLink
          to="/dashboard/leads"
          style={({ isActive }) => ({
            padding: "0.5rem 0",
            color: isActive ? "#4ade80" : "#fff",
            textDecoration: "none",
          })}
        >
          Leads
        </NavLink>

        <NavLink
          to="/dashboard/templates"
          style={({ isActive }) => ({
            padding: "0.5rem 0",
            color: isActive ? "#4ade80" : "#fff",
            textDecoration: "none",
          })}
        >
          Templates
        </NavLink>

        <NavLink
          to="/dashboard/billing"
          style={({ isActive }) => ({
            padding: "0.5rem 0",
            color: isActive ? "#4ade80" : "#fff",
            textDecoration: "none",
          })}
        >
          Billing
        </NavLink>
      </aside>

      <main style={{ flex: 1, background: "#f5f5f5", padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
