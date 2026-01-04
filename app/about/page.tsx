import AboutShowcase from "../components/AboutShowcase";
import robots from "../robots";

export const metadata = {
  title: "About",
  description: "Learn more about Aswin, a full-stack developer passionate about building exceptional web experiences.",
  keywords:["fullstack","react"],
  openGraph:{
    title:"About Aswin Dev - Full-Stack Developer",
    description: "Learn more about Aswin, a full-stack developer passionate about building exceptional web experiences.",
    url: "https://aswindev.in/about",
    type: "website",
    images: [
      {
        url: "https://aswindev.in/og.webp",
        width: 1200,
        height: 630,
        alt: "Aswin Dev - About"
      }
    ]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      nocache: true,
    }
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
   <main className="min-h-screen pt-16">
      <h1 className="sr-only">About Aswin Dev - Full-Stack Developer</h1>
      <AboutShowcase
        name="Aswin"
        headline="ASWIN DEV P K"
        bio="I'm a Front-end developer with hands-on experience building responsive, user-focused web applications using React, TypeScript, and Tailwind CSS. I'm proficient in state management, API integration, and modern development tools like Vite and GitHub Actions. I'm passionate about clean UI, performance optimization, and continuous learning. Eager to collaborate on impactful projects and grow within a professional development team."
      />
    </main>
  );
}
