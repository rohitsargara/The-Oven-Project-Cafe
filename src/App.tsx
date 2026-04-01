/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { About } from "./components/About";
import { Menu } from "./components/Menu";
import { Experience } from "./components/Experience";
import { Gallery } from "./components/Gallery";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <main className="min-h-screen bg-cream text-dark-brown font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <About />
      <Menu />
      <Experience />
      <Gallery />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
