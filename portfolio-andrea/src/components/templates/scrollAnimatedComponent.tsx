import React, { useState, useEffect, useRef } from "react";

interface ScrollAnimationComponentProps {
  children: React.ReactNode;
}

export const ScrollAnimationComponent: React.FC<
  ScrollAnimationComponentProps
> = ({ children }) => {
  const [inView, setInView] = useState(false); // Track if the section is in view
  const sectionRef = useRef<HTMLDivElement | null>(null); // Reference to the section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // If the section is in view, we set inView to true
            observer.unobserve(entry.target); // Stop observing once it's in view
          }
        });
      },
      { threshold: 0.1 } // The section will be considered "in view" when 10% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {inView ? children : null}
      {/* Only render the section when it is in view */}
    </div>
  );
};
