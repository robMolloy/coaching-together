import React from "react";

export const DaisyHero = (p: { heading: React.ReactNode; children: React.ReactNode }) => {
  return (
    <div className="hero min-h-[60vh] bg-neutral">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{p.heading}</h1>
          <div className="py-6 text-3xl font-bold">{p.children}</div>
        </div>
      </div>
    </div>
  );
};
