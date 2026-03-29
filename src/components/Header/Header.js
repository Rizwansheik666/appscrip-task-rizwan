import Link from "next/link";
import styles from "./Header.module.css";

const NAV = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.mainRow}>
        <Link href="/" className={styles.logo1}>♾️</Link>
        <Link href="/" className={styles.logo}>LOGO</Link>
        <div className={styles.icons}>
          <button className={styles.lang}>ENG ▾</button>
          {[
            { label: "Search",   d: "M9 9m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0M14.5 14.5L19 19" },
            { label: "Wishlist", d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z" },
            { label: "Bag",      d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" },
            { label: "Account",  d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" },
          ].map(({ label, d }) => (
            <button key={label} className={styles.iconBtn} aria-label={label}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={d} />
              </svg>
            </button>
          ))}
        </div>
      </div>
      <nav aria-label="Main navigation">
        <ul className={styles.nav}>
          {NAV.map((item) => (
            <li key={item}>
              <Link href={`/${item.toLowerCase().replace(" ", "-")}`} className={styles.navLink}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}