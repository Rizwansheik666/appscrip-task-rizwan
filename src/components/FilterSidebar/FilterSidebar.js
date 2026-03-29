"use client";
import { useState } from "react";
import { useFilter } from "@/lib/FilterContext";
import styles from "./FilterSidebar.module.css";

const SECTIONS = [
  { id: "idealFor",    label: "IDEAL FOR",    options: ["All", "Men", "Women", "Baby & Kids"] },
  { id: "occasion",   label: "OCCASION",     options: ["All", "Casual", "Formal", "Party", "Wedding"] },
  { id: "work",       label: "WORK",         options: ["All", "Office", "Remote", "Outdoor"] },
  { id: "fabric",     label: "FABRIC",       options: ["All", "Cotton", "Linen", "Silk", "Wool"] },
  { id: "segment",    label: "SEGMENT",      options: ["All", "Premium", "Budget", "Luxury"] },
  { id: "suitability",label: "SUITABLE FOR", options: ["All", "Summer", "Winter", "Monsoon", "All Season"] },
];

function Section({ label, options }) {
  const [open, setOpen]       = useState(false);
  const [selected, setSelected] = useState(["All"]);

  function toggle(opt) {
    if (opt === "All") { setSelected(["All"]); return; }
    setSelected(prev => {
      const next = prev.filter(s => s !== "All");
      const updated = next.includes(opt)
        ? next.filter(s => s !== opt)
        : [...next, opt];
      return updated.length === 0 ? ["All"] : updated;
    });
  }

  return (
    <div className={styles.section}>
      <button className={styles.sectionBtn} onClick={() => setOpen(v => !v)}>
        <h2 className={styles.sectionTitle}>{label}</h2>
        <span className={open ? styles.arrowUp : styles.arrow}>▾</span>
      </button>

      <div className={`${styles.options} ${open ? styles.open : ""}`}>
        {!selected.includes("All") && (
          <button className={styles.unselect} onClick={() => setSelected(["All"])}>
            Unselect all
          </button>
        )}
        {options.map(opt => (
          <label key={opt} className={styles.optLabel}>
            <input
              type="checkbox"
              className={styles.check}
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default function FilterSidebar() {
  const { filterVisible } = useFilter();
  const [custom, setCustom] = useState(false);

  if (!filterVisible) return null;

  return (
    <aside className={styles.sidebar} aria-label="Product filters">
      <div className={styles.customRow}>
        <label className={styles.toggleLabel}>
          <span className={styles.toggleTrack} data-on={String(custom)}>
            <span className={styles.thumb} />
          </span>
          <input type="checkbox" checked={custom} onChange={() => setCustom(v => !v)} hidden />
          <span className={styles.customText}>Customizable</span>
        </label>
      </div>

      {SECTIONS.map(s => <Section key={s.id} label={s.label} options={s.options} />)}
    </aside>
  );
}