"use client";
import { useState } from "react";
import { useFilter } from "@/lib/FilterContext";
import styles from "./SortBar.module.css";

const SORTS = [
  "Recommended",
  "Newest First",
  "Popular",
  "Price: Low to High",
  "Price: High to Low",
];

export default function SortBar({ total }) {
  const { filterVisible, setFilterVisible } = useFilter();
  const [sort, setSort] = useState("Recommended");

  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <span className={styles.count}><strong>{total}</strong> Items</span>
        <button className={styles.toggle} onClick={() => setFilterVisible(v => !v)}>
          ☰ {filterVisible ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>
      <div className={styles.right}>
        <label htmlFor="sort" className={styles.label}>Sort by:</label>
        <select
          id="sort"
          className={styles.select}
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          {SORTS.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>
    </div>
  );
}