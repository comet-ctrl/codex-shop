import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const title = "Luma Market — The Restaurant Kitchen, To Go";
  const description = "A warm desert restaurant in Las Vegas serving handmade pasta, open-fire dishes, and seasonal ingredients.";
  return { metadataBase: new URL(`${protocol}://${host}`), title, description, icons: { icon: "/favicon.svg" }, openGraph: { title, description }, twitter: { card: "summary_large_image", title, description } };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
