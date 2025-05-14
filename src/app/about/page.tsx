"use client";

import { useState } from "react";

export default function AboutPage() {
  const [name, setName] = useState("");

  console.log("About Server component");
  // This is a server component
  return <h1>About page</h1>;
}
