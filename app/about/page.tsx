import AboutShowcase from "../components/AboutShowcase";

export const metadata = {
  title: "About | Aswin Dev",
  description: "Learn more about Aswin, a full-stack developer passionate about building exceptional web experiences.",
    alternates: {
    canonical: "/projects",
  },
};

export default function AboutPage() {
  return (
   <main className="min-h-screen pt-16">
      <AboutShowcase
        name="Aswin"
        headline="Front-end Developer"
        bio="I'm a Front-end developer with hands-on experience building responsive, user-focused web applications using React, TypeScript, and Tailwind CSS. I'm proficient in state management, API integration, and modern development tools like Vite and GitHub Actions. I'm passionate about clean UI, performance optimization, and continuous learning. Eager to collaborate on impactful projects and grow within a professional development team."
      />
    </main>
  );
}
