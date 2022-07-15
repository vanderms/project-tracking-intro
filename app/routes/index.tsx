import type { MetaFunction } from "@remix-run/cloudflare";
import { Navbar } from "~/components/navegation/navbar/navbar";
import { HeroSection } from "~/components/sections/hero/hero";

export const meta: MetaFunction = () => ({
  title: "Project tracking intro",
  "og:site_name": "Project tracking intro",
  "og:title": "Project tracking intro",
  "og:description":
    "My solution to the challenge Project tracking intro, by Frontend Mentor",
  "og:image": "https://project-tracking-intro.pages.dev/assets/preview.jpg",
  "og:type": "website",
  "og:image:type": "image/jpeg",
  "og:url": "https://project-tracking-intro.pages.dev/",
});

export default function Index() {
  return (
    <div className="max-w-[90rem] mx-auto">
      <Navbar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}
