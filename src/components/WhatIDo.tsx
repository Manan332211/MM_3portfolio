import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FRONTEND</h3>
              <h4>Interactive 3D Experience</h4>
              <p>
                <strong>3D Visualization:</strong> Immersive 3D viewer using Three.js and WebGL with real-time reflection, refraction, and realistic glass materials.<br />
                <strong>User Interface:</strong> Intuitive customization panel to switch shapes (Diamond, Cube, Sphere) and lighting modes.<br />
                <strong>Dynamic Rendering:</strong> OrbitControls integrated for 360° rotation and zoom product inspection.<br />
                <strong>Laser Mode Simulation:</strong> Custom shader-like logic to convert standard images into a 3D point cloud (Laser Engraved) view.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">JavaScript (ES6+)</div>
                <div className="what-tags">Three.js</div>
                <div className="what-tags">WebGL</div>
                <div className="what-tags">CSS3 (Flexbox/Grid)</div>
                <div className="what-tags">HTML5</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>BACKEND</h3>
              <h4>API Integration & Security</h4>
              <p>
                <strong>AI Integration:</strong> remove.bg REST API integrated via PHP for automatic background removal from user-uploaded images.<br />
                <strong>Custom Plugin Architecture:</strong> Lightweight, shortcode-ready plugin developed using WordPress standard hooks and modular structure.<br />
                <strong>Secure Data Handling:</strong> Secure client-server communication using WordPress AJAX and Nonces, with server-side validation and sanitization.<br />
                <strong>Image Processing:</strong> Handled uploads using Base64 encoding and secure temporary storage for a smooth and fast user experience.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">PHP</div>
                <div className="what-tags">WordPress Plugin API</div>
                <div className="what-tags">REST API</div>
                <div className="what-tags">AJAX</div>
                <div className="what-tags">JSON</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
