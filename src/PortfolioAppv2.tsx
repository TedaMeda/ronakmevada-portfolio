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
  ChevronDown,
} from "lucide-react";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

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
    tags: ["Java", "Spring Boot", "Redis", "MongoDB", "RESTful APIs"],
    links: { repo: "https://github.com/TedaMeda/urlshortner" },
  },
  {
    id: "p2",
    title: "Resumify",
    description:
      "Score your resume with job description, get feedback for improvement",
    image:
      //   "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
      "./Resumify.png",
    tags: ["React", "Typescript", "Puter.js", "Zustand", "Tailwind", "AI"],
    links: {
      live: "https://resumify-sable.vercel.app/",
      repo: "https://github.com/TedaMeda/Resumify",
    },
  },
  {
    id: "p3",
    title: "MiniDI",
    description:
      "Designed and implemented a lightweight dependancy injection framework in Java, inspired by Spring Core.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["Java", "Java Reflaction API", "Multithreading"],
    links: { repo: "https://github.com/TedaMeda/MiniDIProject" },
  },
  {
    id: "p4",
    title: "JobHub",
    description:
      "Developed job portal where hiring managers can post jobs, applicants can apply and view progress of job application.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    tags: ["Springboot", "MongoDB", "Spring Data JPA", "JWT", "RESTful APIs"],
    // links: { repo: "https://github.com/TedaMeda/MiniDIProject" },
  },
];

const EXPERIENCES: Experience[] = [
  {
    id: "e3",
    role: "Backend Developer",
    company: "Kompliancenow.ai",
    period: "March 2025 – Present",
    description:
      "Developed modern React + Express.js web app from scratch, integrated REST APIs, fine-tuned OpenAI model using OpenAI APIs, and designed cloud architecture and deployed application to AWS. Mentoring fellow junior developers, guiding them on best practices, architecture decisions, and code reviews.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind",
      "OpenAI APIs",
      "AWS S3",
      "AWS ECS",
      "ALB",
      "Route-53",
      "Docker",
    ],
  },
  {
    id: "e2",
    role: "Software Engineer",
    company: "MAQ Software",
    period: "July 2023 – Aug 2024",
    description: `Optimized the performance by around 50% of existing application. Enhanced 1000+ users productivity by developing a real-time issue-tracking application, which reduced communication latency between users across the globe, and provides a seamless experience on the Web and mobile devices. Achieved a performance improvement of 40%-50% by optimizing database queries. Developed interactive Power BI reports by integrating data from multiple sources, improving client productivity by real-time reporting and simplifying data insights for 20+ stack-holders.`,
    skills: [
      "Java",
      "Springboot",
      "RESTful APIs",
      "JavaScript",
      "Power BI",
      "Microsoft Power Apps",
      "Microsoft Power Automate",
      "SQL",
      "Git",
      "Azure DevOps",
      "Agile",
      "Deployment",
    ],
  },
  {
    id: "e1",
    role: "Assosiate Software Engineer",
    company: "MAQ Software",
    period: "Jan 2023 – Jun 2023",
    description: `Migrated three on-premises databases to cloud databases leveraging advanced cloud technologies. Achieved a performance improvement of 50%-60% by optimizing database queries. Designed and implemented an interactive Power BI dashboard, resulting in a 25% improvement in user
productivity by automating reporting and simplifying data insights for 50+ stakeholders.`,
    skills: [
      "SQL",
      "Power BI",
      "ETL",
      "Data analysis",
      "Azure Synapse Analytics",
      "Azure Databricks",
      "Git",
      "Azure DevOps",
      "Agile",
    ],
  },
];

const SKILLS = [
  "Java",
  "Spring boot",
  "Microservices",
  "OOPs",
  "FastAPI",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "Docker",
  "AWS",
];

const TAGS = [
  "All",
  "React",
  "TypeScript",
  "Tailwind",
  //   "Python",
  "Java",
  "AI",
  //   "OCR",
  "Redis",
  "MongoDB",
];

const LINKS = [
  {
    id: "codeforces",
    href: "https://codeforces.com/profile/Ronak426",
    icon: SiCodeforces,
  },
  {
    id: "codechef",
    href: "https://www.codechef.com/users/ronakmevada610",
    icon: SiCodechef,
  },
  {
    id: "leetcode",
    href: "https://leetcode.com/u/TedaMeda/",
    icon: SiLeetcode,
  },
  {
    id: "github",
    href: "https://github.com/tedameda",
    icon: Github,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/ronak-mevada/",
    icon: Linkedin,
  },
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
  const [visibleProjects, setVisibleProjects] = useState<number>(3);
  const [visibleExperiences, setVisibleExperiences] = useState<number>(5);

  const filtered = useMemo(
    () => filterProjects(PROJECTS, activeTag, query),
    [activeTag, query]
  );

  // Reset visible projects count when filter changes
  useEffect(() => {
    setVisibleProjects(3);
  }, [activeTag, query]);

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
    alert("Thank you for your interest, Please contact me over mail");
    e.currentTarget.reset();
  }

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const loadMoreExperiences = () => {
    setVisibleExperiences((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl grid place-content-center bg-primary/10">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">Ronak Mevada</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="GitHub" asChild>
              <a
                href="https://github.com/tedameda"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" aria-label="LinkedIn" asChild>
              <a
                href="https://www.linkedin.com/in/ronak-mevada/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            <Button variant="ghost" size="icon" aria-label="Email" asChild>
              <a href="mailto:ronakmevada610@gmail.com">
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
              Hii, I am Ronak Mevada
            </h1>
            <p className="mt-4 text-muted-foreground max-w-prose">
              I build fast, reliable web and backend systems. I care about clean
              architecture, great DX, and tiny response times.
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
                <a
                  href="https://drive.google.com/file/d/1HBxgI-NcGUjHeTYj8jo6PWOugjlcZMZg/view?usp=sharing"
                  target="_block"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
          </motion.div>
          {/* <motion.div
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
                  Java • Springboot • Node.js • React • TypeScript • PostgreSQL
                  • MongoDB
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
          </motion.div> */}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Projects
            </h2>
            <p className="text-muted-foreground">
              A small selection of things I've built.
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
          {filtered.slice(0, visibleProjects).map((p) => (
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

        {visibleProjects < filtered.length && (
          <div className="mt-8 flex justify-center">
            <Button onClick={loadMoreProjects} variant="outline">
              Load More Projects <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </section>

      {/* Work Experience */}
      <section id="experience" className="container mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Work Experience
        </h2>
        <div className="mt-6 grid gap-6">
          {EXPERIENCES.slice(0, visibleExperiences).map((exp) => (
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

        {visibleExperiences < EXPERIENCES.length && (
          <div className="mt-8 flex justify-center">
            <Button onClick={loadMoreExperiences} variant="outline">
              Load More Experiences <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </section>

      {/* About */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              About
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              I'm a full-stack engineer who enjoys building polished frontends
              and resilient backends. I've shipped products across
              React/Next.js, Spring Boot, and Python. I love clean APIs, good
              naming, and testable, modular code. When I'm not coding, you'll
              find me reading docs (for fun), or brainstorming new ideas with
              ChatGPT.
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

      <section id="contact" className="container mx-auto px-4">
        <Card className="rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle>Links</CardTitle>
            <CardDescription>Know my existance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {LINKS.map((l) => (
                <Badge key={l.id} variant="secondary" className="rounded-full">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={l.href}>
                      <l.icon />
                    </a>
                  </Button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-10">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
            <CardDescription>
              Have a project in mind? Let's talk.
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
          <p>© {new Date().getFullYear()} Ronak Mevada. All rights reserved.</p>
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
