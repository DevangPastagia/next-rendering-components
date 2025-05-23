import { serverUtils } from "@/utils/serverUtils";
import ImageSlider from "@/components/imageSlider";

export default function ServerRoutePage() {
  console.log("Server route rendered");

  const result = serverUtils();

  return (
    <div>
      <h1>Server Route</h1>
      <p>{result}</p>
      <ImageSlider />
    </div>
  );
}
