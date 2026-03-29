"use client";
import Link from "next/link";
import styles from "./Footer.module.css";

const METTA = ["About Us","Stories","Artisans","Boutiques","Contact Us","EU Compliances Docs"];
const QUICK = ["Orders & Shipping","Join/Login as a Seller","Payment & Pricing","Return & Refunds",
    "FAQs","Privacy Policy","Terms & Conditions"];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.newsletter}>
        <div>
          <h2 className={styles.nlTitle}>Be the first to know</h2>
          <p className={styles.nlSub}>Sign up for updates from mettā muse.</p>
        </div>
        <form className={styles.form} onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Enter your e-mail..." className={styles.input} aria-label="Email" />
          <button type="submit" className={styles.subBtn}>SUBSCRIBE</button>
        </form>
      </div>

      <div className={styles.divider} />

      <div className={styles.links}>
        <div>
          <h3 className={styles.colTitle}>mettā muse</h3>
          <ul>{METTA.map(i => <li key={i}><Link href="#" className={styles.link}>{i}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className={styles.colTitle}>Quick Links</h3>
          <ul>{QUICK.map(i => <li key={i}><Link href="#" className={styles.link}>{i}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className={styles.colTitle}>CONTACT US</h3>
          <ul>
            <li><a href="tel:+442211335360" className={styles.link}>+44 221 133 5360</a></li>
            <li><a href="mailto:customercare@mettamuse.com" className={styles.link}>customercare@mettamuse.com</a></li>
          </ul>
          <h3 className={`${styles.colTitle} ${styles.mt}`}>Currency</h3>
          <p className={styles.link}>🌐 USD</p>
        </div>
        <div>
          <h3 className={styles.colTitle}>Follow Us</h3>
          <div className={styles.social}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
            aria-label="Instagram" className={styles.socialLink}>IG</a>
            <a href="https://linkedin.com"  target="_blank" rel="noopener noreferrer" 
            aria-label="LinkedIn"  className={styles.socialLink}>IN</a>
          </div>
          <h3 className={`${styles.colTitle} ${styles.mt}`}>mettā muse Accepts</h3>
          <div className={styles.payments}>
            {["G","M","P","A","◎","O"].map((c, i) => <span key={i} className={styles.badge}>{c}</span>)}
          </div>
        </div>
      </div>

      <div className={styles.divider} />
      <p className={styles.copy}>Copyright © 2023 mettamuse. All rights reserved.</p>
    </footer>
  );
}   