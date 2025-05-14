"use client";

import { useState } from "react";

export default function DashboardPage() {
  console.log("Dashboard Client component");

  const [name, setName] = useState("");

  return (
    <div>
      <h1>Dashboard page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
