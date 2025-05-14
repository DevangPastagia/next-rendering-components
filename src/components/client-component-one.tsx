"use client";

import { useState } from "react";

export default function ClientComponentOne({
  children,
}: {
  children: React.ReactNode;
}) {
  const [name, setName] = useState("Hero");

  return (
    <>
      <h1>Client Component Two</h1>
      {children}
    </>
  );
}
