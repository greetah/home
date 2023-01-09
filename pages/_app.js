import "../styles/globals.css";
import { Space_Grotesk } from "@next/font/google";

const space = Space_Grotesk({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={space.className}>
      <Component {...pageProps} />
    </main>
  );
}
