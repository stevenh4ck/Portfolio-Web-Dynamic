import { motion } from "framer-motion";
import profileImg from "@/assets/profile-fullbody.jpg";
import { Code2, Smartphone, Palette, TrendingUp, Wrench, ArrowRight, Terminal, Github, Linkedin, Mail } from "lucide-react";

const navItems = ["Services", "About", "Contact"];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "High-performance websites & web apps built with modern frameworks. React, Next.js, TypeScript.",
    tags: ["React", "TypeScript", "Tailwind"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Cross-platform mobile applications with native performance and beautiful interfaces.",
    tags: ["React Native", "Flutter", "iOS/Android"],
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description: "User-centered design that converts. Wireframes, prototypes, and pixel-perfect interfaces.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: TrendingUp,
    title: "Forex & Crypto Trading",
    description: "Algorithmic trading strategies, market analysis tools, and custom trading bots.",
    tags: ["MetaTrader", "Python", "APIs"],
  },
  {
    icon: Wrench,
    title: "Software & Tools",
    description: "Custom software solutions, automation tools, and developer utilities built to scale.",
    tags: ["SaaS", "Automation", "APIs"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background grid-bg">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo("hero")} className="font-mono text-lg font-bold text-primary glow-text">
            {"<DEV />"}
          </button>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="min-h-screen flex items-center pt-16">
        <div className="container flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl flex-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="w-5 h-5 text-primary" />
              <span className="text-sm font-mono text-primary">Available for projects</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-mono leading-tight mb-6">
              I build{" "}
              <span className="text-primary glow-text">digital</span>
              <br />
              experiences &{" "}
              <span className="text-accent glow-accent">trading</span>
              <br />
              systems
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Full-stack developer, UX/UI designer & algorithmic trader. 
              Crafting software that performs — from pixel-perfect interfaces to profitable trading bots.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover:opacity-90 transition-opacity glow-box"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("services")}
                className="flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono rounded-lg hover:border-primary/50 transition-colors"
              >
                View work
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative w-56 md:w-72 aspect-[3/4] rounded-2xl overflow-hidden glow-box gradient-border">
              <img
                src={profileImg}
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-mono text-primary mb-2">
              {"// SERVICES"}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold font-mono">
              What I do
            </motion.h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={i}
                className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 gradient-border"
              >
                <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold font-mono mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-mono text-primary mb-2">
              {"// ABOUT"}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold font-mono mb-8">
              Behind the code
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a multi-disciplinary developer who thrives at the intersection of 
                <span className="text-foreground font-medium"> design, engineering, and finance</span>. 
                With years of experience shipping products and trading markets, I bring a unique perspective to every project.
              </p>
              <p>
                My stack spans from frontend frameworks to trading algorithms — 
                I believe the best software comes from understanding both the 
                <span className="text-primary"> technical architecture</span> and the 
                <span className="text-accent"> business logic</span> behind it.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} custom={3} className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "50+", label: "Projects" },
                { value: "1+", label: "Years Exp." },
                { value: "24/7", label: "Markets" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-card border border-border">
                  <div className="text-2xl font-bold font-mono text-primary glow-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-mono mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-xl"
          >
            <motion.p variants={fadeUp} custom={0} className="text-sm font-mono text-primary mb-2">
              {"// CONTACT"}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold font-mono mb-4">
              Let's work together
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground mb-10">
              Got a project in mind? Let's talk about how I can help bring your ideas to life.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex gap-4">
              <a
                href="mailto:hello@dev.com"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg hover:opacity-90 transition-opacity glow-box"
              >
                <Mail className="w-4 h-4" /> Email me
              </a>
              <a href="https://github.com/stevenh4ck" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-3 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-mono">© 2026 DEV. All rights reserved.</span>
          <span className="text-xs text-muted-foreground font-mono">Built with passion</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
