"use client";

import { useState } from "react";

export default function ClientComponentTwo() {
  const [name, setName] = useState("Hero");

  return <h1>Client Component Two</h1>;
}
