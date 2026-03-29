"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  return (
    <article className={styles.card}>
      <div className={styles.imgWrap}>
        <Image
          src={product.image}
          alt={`${product.title} — ${product.category} product image`}
          fill
          sizes="(max-width: 600px) 50vw, 25vw"
          className={styles.img}
          quality={75}
          loading="lazy"
        />
        <button
          className={styles.heart}
          onClick={() => setLiked(v => !v)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <svg width="18" height="18" viewBox="0 0 24 24"
            fill={liked ? "#e57373" : "none"}
            stroke={liked ? "#e57373" : "currentColor"}
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>

      <div className={styles.info}>
        <h2 className={styles.name}>{product.title}</h2>
        <p className={styles.price}>Sign in or Create an account to see pricing</p>
      </div>
    </article>
  );
}