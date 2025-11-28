import payload from "payload";

export default async function ProductsPage() {
  try {
    const data = await payload.find({
      collection: "products", 
      limit: 50,              
    });

    return (
      <div>
        {data.docs.map((product: any) => (
          <div key={product.id} className="border p-4 mb-2">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return <p className="text-red-500">Failed to load products.</p>;
  }
}
