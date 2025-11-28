export default async function ProductsPage() {
    const res = await fetch("http://localhost:3000/api/products", {
        next: { revalidate: 5 },
    });

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
