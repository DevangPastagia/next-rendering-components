import { cookies } from "next/headers";
export default async function AboutPage() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme");
  console.log("Theme cookie:", theme);
  console.log("About Server component");
  return <h1>About page {new Date().toLocaleDateString()} </h1>;
}
