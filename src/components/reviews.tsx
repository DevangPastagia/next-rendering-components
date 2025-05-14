export default async function Reviews() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Reviews</h1>
      <p className="text-gray-500">
        This is the reviews page. You can manage your reviews here.
      </p>
    </div>
  );
}
