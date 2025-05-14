import "server-only";

// Note: As we install package npm i server-only, we can use server-only imports in server components

export const serverUtils = () => {
  console.log("We are using serverUtils");
  return "server result ";
};
