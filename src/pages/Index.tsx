import React, { useEffect } from "react";

const Index: React.FC = () => {
  useEffect(() => {
    document.title = "ComplieX - Your All-in-One Coding Platform";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".feature-card").forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-compliex-dark text-white">
      <h1>Hello World</h1>
    </div>
  );
};

export default Index;
