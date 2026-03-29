
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SortBar from "@/components/SortBar/SortBar";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { fetchAllProducts } from "@/lib/fetchProducts"; 
import { FilterProvider } from "@/lib/FilterContext";    
import styles from "./page.module.css";

export const dynamic = "force-dynamic"; 

export default async function ProductListingPage() {
  const products = await fetchAllProducts();

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "mettā muse Products",
    numberOfItems: products.length,
    itemListElement: products.slice(0, 10).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.title,
        image: p.image,
        description: p.description,
        offers: { "@type": "Offer", price: p.price, priceCurrency: "USD" },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Header />

      <main className={styles.main} id="main-content">
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>DISCOVER OUR PRODUCTS</h1>
          <p className={styles.heroDesc}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>

        <FilterProvider>
          <SortBar total={products.length} />
          <div className={styles.body}>
            <FilterSidebar />
            <ProductGrid products={products} />
          </div>
        </FilterProvider>
      </main>

      <Footer />
    </>
  );
}