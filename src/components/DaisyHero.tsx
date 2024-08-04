import React from "react";

export const DaisyHero = (p: {
  backgroundImageUrl: string;
  heading: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="hero min-h-[60vh]"
      style={{
        backgroundImage: `url(${p.backgroundImageUrl})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">{p.heading}</h1>
          <p className="mb-5 text-3xl font-bold">{p.children}</p>
        </div>
      </div>
    </div>
  );
};
