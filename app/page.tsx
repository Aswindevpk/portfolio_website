import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Reveal from "./components/Reveal";
import Section from "./components/Section";
import CapabilityCard from "./components/CapabilityCard";
import { FaServer } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { PiCodeFill } from "react-icons/pi";

export default function Home() {
  const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "Person",
    name: "Aswin Dev P K",
    image: "https://aswindev.in/profile.png",
    url: "https://aswindev.in",
    jobTitle: "Full Stack React Developer",
    sameAs: [
      "https://www.instagram.com/aswin_dev._/",
      "https://www.linkedin.com/in/aswindevpk/",
    ],
  };

  return (
    <>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <div className="min-h-screen pt-16">
        <main id="top">
          <Hero
            name="Aswin"
            role="React Full‑Stack Developer"
            tagline="I build high-signal web products with calm UI, predictable state, and performance that feels invisible."
          />
          <Section id="what">
            <div className="grid gap-6 sm:grid-cols-3">
              <CapabilityCard
                title="Frontend"
                description="Accessible, responsive UI systems built with a focus on clarity, performance, and long-term maintainability."
                tools={[
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Styled Components",
                ]}
                icon={<PiCodeFill className="h-6 w-6" />}
              />

              <CapabilityCard
                title="Backend"
                description="Reliable backend systems and APIs that are intentionally boring—fast, typed, and easy to reason about."
                tools={["Supabase", "PostgreSQL"]}
                icon={<FaServer className="h-6 w-6" />}
              />

              <CapabilityCard
                title="Product"
                description="End-to-end ownership from idea to deployment, with clear scope, thoughtful UX, and fewer surprises."
                tools={["UX Decisions", "Shipping", "Iteration"]}
                icon={<FiPackage className="h-6 w-6" />}
              />
            </div>
          </Section>

          <Section id="projects" eyebrow="Featured" title="My Projects">
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard
                name="Medium Clone"
                description="A full-featured blogging platform with article publishing, user profiles, and interactive features like comments and claps."
                stack={["React", "Node.js", "MongoDB", "Express", "Redux"]}
                demoUrl="https://blog.aswindev.in/"
                githubUrl="https://github.com/Aswindevpk/binary-mockup"
              />
            </div>
            {/* 
          <div className="mt-16">
            <h3 className="text-lg font-medium text-foreground/80 mb-6">Building</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <ProjectCard
                name="Malo E-commerce"
                description="A modern e-commerce platform with product listings, cart functionality, and secure checkout process."
                stack={["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "MongoDB"]}
                isComingSoon={true}
              />
              <ProjectCard
                name="Signalboard"
                description="A minimal team dashboard that surfaces only what matters: trends, blockers, and next actions."
                stack={["Next.js", "React", "TypeScript", "Tailwind", "Postgres"]}
                isComingSoon={true}
              />
            </div>
          </div> */}
          </Section>
        </main>
      </div>
    </>
  );
}
