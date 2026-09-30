import { Code2, Layers, Rocket, Lightbulb } from "lucide-react";
const highlights = [
  {
    icon: Code2,
    title: "Clean & Scalable",
    description:
      "Writing clean, reusable, and maintainable code for scalable applications.",
  },
  {
    icon: Layers,
    title: "Reusable Components",
    description:
      "Building reusable components and common solutions to keep applications consistent and maintainable.",
  },
  {
    icon: Rocket,
    title: "Performance Driven",
    description:
      "Improving application performance, responsiveness, and overall user experience.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Understanding problems, handling edge cases, and finding practical solutions to development challenges.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time
              </span>
            </h2>
            <div className="space-y-4 text text-muted-foreground animate-fade-in animation-delay-200">
              <p>I like solving problems more than just writing code.</p>

              <p>
                Throughout my 3+ years as a frontend developer, I've worked on
                enterprise and fintech applications where I've turned
                requirements into real, production-ready features. From complex
                forms and reusable components to API integrations and
                performance improvements, I enjoy figuring out how to make
                things work better — both under the hood and on the screen.
              </p>

              <p>
                I'm a big believer in keeping things simple, learning from every
                problem, and continuously improving my craft. Angular has been a
                major part of my journey, while React is the next part I'm
                actively exploring and building with.
              </p>
            </div>
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                 "My mission is to keep learning, build with purpose, and turn complex ideas into simple experiences that people can actually enjoy using."
              </p>
            </div>
          </div>
          {/*Right Column */}

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{animationDelay: `${(index+1) * 100}ms`}}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 ">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
