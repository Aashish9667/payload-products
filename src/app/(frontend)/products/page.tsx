export default async function ProductsPage() {



  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
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
