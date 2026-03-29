
export async function fetchAllProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error("Fetch failed");
    return await res.json();
  } catch (e) {
    console.error("fetchAllProducts:", e);
    return [];
  }
}