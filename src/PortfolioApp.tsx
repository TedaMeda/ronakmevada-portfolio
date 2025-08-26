import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  Moon,
  Sun,
  ArrowRight,
  Code2,
  Download,
} from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links?: { live?: string; repo?: string };
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "URL Shortener",
    description:
      "A modular, high-throughput URL shortener with analytics, rate limiting, and custom aliases.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    tags: ["Java", "Spring Boot", "Redis", "MongoDB"],
    links: { repo: "https://github.com/TedaMeda/urlshortner" },
  },
  {
    id: "p2",
    title: "PDF AI Assistant",
    description:
      "Extracts text & tables from mixed-language PDFs, runs OCR, and translates using Transformers.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    tags: ["Python", "FastAPI", "OCR", "Transformers"],
    links: { repo: "https://github.com/you/pdf-ai" },
  },
  {
    id: "p3",
    title: "Minimal React Portfolio",
    description:
      "This very site: a minimal, accessible, responsive portfolio using React, TS, Tailwind & shadcn.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind", "shadcn"],
    links: { live: "#", repo: "https://github.com/you/portfolio" },
  },
  {
    id: "p3",
    title: "Minimal React Portfolio",
    description:
      "This very site: a minimal, accessible, responsive portfolio using React, TS, Tailwind & shadcn.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind", "shadcn"],
    links: { live: "#", repo: "https://github.com/you/portfolio" },
  },
  {
    id: "p3",
    title: "Minimal React Portfolio",
    description:
      "This very site: a minimal, accessible, responsive portfolio using React, TS, Tailwind & shadcn.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind", "shadcn"],
    links: { live: "#", repo: "https://github.com/you/portfolio" },
  },
  {
    id: "p3",
    title: "Minimal React Portfolio",
    description:
      "This very site: a minimal, accessible, responsive portfolio using React, TS, Tailwind & shadcn.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind", "shadcn"],
    links: { live: "#", repo: "https://github.com/you/portfolio" },
  },
  {
    id: "p3",
    title: "Minimal React Portfolio",
    description:
      "This very site: a minimal, accessible, responsive portfolio using React, TS, Tailwind & shadcn.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind", "shadcn"],
    links: { live: "#", repo: "https://github.com/you/portfolio" },
  },
  {
    id: "p3",
    title: "Minimal React Portfolio",
    description:
      "This very site: a minimal, accessible, responsive portfolio using React, TS, Tailwind & shadcn.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind", "shadcn"],
    links: { live: "#", repo: "https://github.com/you/portfolio" },
  },
  {
    id: "p3",
    title: "Minimal React Portfolio",
    description:
      "This very site: a minimal, accessible, responsive portfolio using React, TS, Tailwind & shadcn.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["React", "TypeScript", "Tailwind", "shadcn"],
    links: { live: "#", repo: "https://github.com/you/portfolio" },
  },
];

const EXPERIENCES: Experience[] = [
  {
    id: "e1",
    role: "Software Engineer",
    company: "TechCorp Solutions",
    period: "2022 – Present",
    description:
      "Built scalable backend services in Java Spring and microservices architecture. Improved API latency by 40% and led migration to Redis cache.",
    skills: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker"],
  },
  {
    id: "e2",
    role: "Full-Stack Developer",
    company: "InnoWeb Labs",
    period: "2020 – 2022",
    description:
      "Developed modern React + Next.js web apps, integrated REST APIs, and set up CI/CD pipelines reducing deployment time by 60%.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "CI/CD"],
  },
  {
    id: "e3",
    role: "Intern Developer",
    company: "AI Research Center",
    period: "2019 – 2020",
    description:
      "Worked on Python ML pipelines for OCR and NLP tasks. Implemented preprocessing and model training scripts for production use.",
    skills: ["Python", "OCR", "Transformers", "FastAPI"],
  },
];

const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "FastAPI",
  "Java Spring",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "Kubernetes",
  "AWS",
  "Tailwind CSS",
  "shadcn/ui",
];

const TAGS = [
  "All",
  "React",
  "TypeScript",
  "Tailwind",
  "Python",
  "Java",
  "AI",
  "OCR",
  "Redis",
  "MongoDB",
];

// --- Pure function + quick runtime assertions (lightweight test cases) ---
export function filterProjects(
  projects: Project[],
  tag: string,
  query: string
): Project[] {
  const q = query.trim().toLowerCase();
  return projects.filter((p) => {
    const matchesTag =
      tag === "All" ||
      p.tags.some((t) => t.toLowerCase() === tag.toLowerCase());
    const matchesQuery =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q));
    return matchesTag && matchesQuery;
  });
}

// Lightweight self-checks in dev only
if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  try {
    console.assert(
      filterProjects(PROJECTS, "All", "").length === PROJECTS.length,
      "Test: All + empty query should return all projects"
    );
    const javaOnly = filterProjects(PROJECTS, "Java", "");
    console.assert(
      javaOnly.every((p) => p.tags.includes("Java")),
      "Test: Java tag filter should only return Java projects"
    );
    const pdfSearch = filterProjects(PROJECTS, "All", "pdf");
    console.assert(
      pdfSearch.some((p) => p.id === "p2"),
      "Test: Query 'pdf' should include PDF AI Assistant"
    );
    const reactSearch = filterProjects(PROJECTS, "React", "minimal");
    console.assert(
      reactSearch.some((p) => p.id === "p3"),
      "Test: React + 'minimal' should include Minimal React Portfolio"
    );
  } catch {
    // no-op
  }
}

function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark };
}

export default function PortfolioApp() {
  const { dark, setDark } = useDarkMode();
  const [activeTag, setActiveTag] = useState<string>("All");
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(
    () => filterProjects(PROJECTS, activeTag, query),
    [activeTag, query]
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "");
    const message = String(form.get("message") || "");
    // Placeholder action; replace with API/Email integration.
    alert(
      `Thanks ${
        name || "there"
      }! I\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message.substring(
        0,
        120
      )}...`
    );
    e.currentTarget.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl grid place-content-center bg-primary/10">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">Your Name</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="GitHub" asChild>
              <a
                href="https://github.com/your"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn" asChild>
              <a
                href="https://linkedin.com/in/your"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Email" asChild>
              <a href="mailto:you@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <Button
              variant="outline"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
            >
              {dark ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-14 pb-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Minimalistic, Responsive Portfolio
            </h1>
            <p className="mt-4 text-muted-foreground max-w-prose">
              Hi, I build fast, reliable web and backend systems. I care about
              clean architecture, great DX, and tiny response times.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="overflow-hidden rounded-2xl shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
                alt="workspace"
                className="aspect-video w-full object-cover"
                loading="lazy"
              />
              <CardHeader className="pb-2">
                <CardTitle>Software Engineer</CardTitle>
                <CardDescription>
                  React • TypeScript • Java • Python • Cloud
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.slice(0, 8).map((s) => (
                    <Badge key={s} variant="secondary" className="rounded-full">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Projects
            </h2>
            <p className="text-muted-foreground">
              A small selection of things I’ve built.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <Button
                  key={t}
                  size="sm"
                  variant={activeTag === t ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setActiveTag(t)}
                >
                  {t}
                </Button>
              ))}
            </div>
            <div className="sm:min-w-[240px]">
              <Input
                placeholder="Search projects..."
                value={query}
                onChange={(e) => setQuery(e.currentTarget.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden rounded-2xl">
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="aspect-video w-full object-cover transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline" className="rounded-full">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  {p.links?.live && (
                    <Button asChild size="sm">
                      <a href={p.links.live} target="_blank" rel="noreferrer">
                        Live <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {p.links?.repo && (
                    <Button asChild size="sm" variant="outline">
                      <a href={p.links.repo} target="_blank" rel="noreferrer">
                        Code <Github className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="container mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Work Experience
        </h2>
        <div className="mt-6 grid gap-6">
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    {exp.role} – {exp.company}
                  </CardTitle>
                  <CardDescription>{exp.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-3 text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <Badge key={s} variant="outline" className="rounded-full">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              About
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              I’m a full-stack engineer who enjoys building polished frontends
              and resilient backends. I’ve shipped products across
              React/Next.js, Spring Boot, and Python. I love clean APIs, good
              naming, and testable, modular code. When I’m not coding, you’ll
              find me reading docs (for fun), tweaking keyboard layouts, or
              speed-running build pipelines.
            </p>
          </div>
          <Card className="rounded-2xl">
            <CardHeader className="pb-2">
              <CardTitle>Skills</CardTitle>
              <CardDescription>Things I use often</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <Badge key={s} variant="secondary" className="rounded-full">
                    {s}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-10">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>
              Have a project in mind? Let’s talk.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
              <Input name="name" placeholder="Your name" required />
              <Input
                name="email"
                type="email"
                placeholder="Email address"
                required
              />
              <Input
                name="subject"
                className="sm:col-span-2"
                placeholder="Subject"
              />
              <Textarea
                name="message"
                className="sm:col-span-2"
                placeholder="Message"
                rows={5}
                required
              />
              <div className="sm:col-span-2">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="container mx-auto px-4 pt-8 pb-16 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <a className="underline-offset-4 hover:underline" href="#">
              Privacy
            </a>
            <span>•</span>
            <a className="underline-offset-4 hover:underline" href="#">
              Imprint
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
