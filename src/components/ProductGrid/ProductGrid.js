import ProductCard from "@/components/ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({ products }) {
  if (!products?.length)
    return <p className={styles.empty}>No products found.</p>;

  return (
    <section className={styles.wrapper} aria-label={`${products.length} products listed`}>
      <ul className={styles.grid} role="list">
        {products.map(p => (
          <li key={p.id}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </section>
  );
}