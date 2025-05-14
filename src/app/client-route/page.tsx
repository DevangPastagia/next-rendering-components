"use client";

// Notre: As we install package npm i server-only, we can use server-only imports in client components

// import { serverUtils } from "@/utils/serverUtils";

export default function ClientRoutePage() {
  console.log("Client route rendered");

  // const result = serverUtils();

  return (
    <div>
      <h1>Client Route</h1>
      {/* <p>{result}</p> */}
    </div>
  );
}
