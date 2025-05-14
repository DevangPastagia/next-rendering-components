export default async function Products() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Products</h1>
      <p className="text-gray-500">
        This is the products page. You can manage your products here.
      </p>
    </div>
  );
}
