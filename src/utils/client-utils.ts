import "client-only";

// Note: As we install package npm i client-only, we can use client-only imports in client components

export const clientSideFunction = () => {
  console.log("use window object, use locale storage");
  return "Client result";
};
