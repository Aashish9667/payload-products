export default async function ProductsPage() {
  const baseURL = process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000";


  const res = await fetch(`${baseURL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  const data = await res.json();

  return (
    <div>
      {data.docs.map((product: any) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>₹{product.price}</p>
          <img
            src={product.image?.url}
            alt={product.title}
            width={200}
          />
        </div>
      ))}
    </div>
  );
}
