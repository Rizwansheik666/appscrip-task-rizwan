import "./globals.css";

export const metadata = {
  title: "Discover Our Products | mettā muse",
  description: "Browse 3,425+ curated products at mettā muse — clothing, accessories and lifestyle for men, women, and kids.",
  openGraph: {
    title: "Discover Our Products | mettā muse",
    description: "Browse 3,425+ curated products.",
    type: "website",
    siteName: "mettā muse",
  },
  robots: { index: true, follow: true },
};
const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Discover Our Products — mettā muse",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: "https://mettamuse.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://mettamuse.com/products" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}