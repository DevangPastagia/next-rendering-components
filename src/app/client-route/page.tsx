"use client";

import { clientSideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  console.log("Client route rendered");

  const result = clientSideFunction();

  return (
    <div>
      <h1>Client Route</h1>
      <p>{result}</p>
    </div>
  );
}
