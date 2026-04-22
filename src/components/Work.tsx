import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "PropEase",
    category: "Full-Stack Property SaaS",
    tools: "Laravel, React, Filament, Docker, TypeScript, PostgreSQL",
    description: "Built a headless property management system with a Laravel RESTful API and a decoupled React frontend. Secured cross-origin frontend-to-backend communication using Laravel Sanctum. Deployed to Render & Vercel using Docker and managed PostgreSQL."
  },
  {
    name: "AI-Powered 3D Crystal Configurator",
    category: "WordPress Plugin",
    tools: "WordPress, Three.js, WebGL, AJAX, REST APIs",
    description: "Built a custom plugin for real-time 3D product customization using Three.js and WebGL. Integrated AI background removal APIs for laser engraving image processing. Managed secure frontend-to-backend data flow using WordPress AJAX and Nonce verification."
  },
  {
    name: "Headless Content Delivery System",
    category: "Web Application",
    tools: "React.js, WordPress REST API, ACF, Tailwind CSS",
    description: "A fast and decoupled headless content delivery system integrating a React frontend with a scalable WordPress backend via REST API."
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>

                <p style={{ marginTop: "1rem", fontSize: "14px", lineHeight: "1.5", color: "var(--light)", opacity: "0.8" }}>
                  {project.description}
                </p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
