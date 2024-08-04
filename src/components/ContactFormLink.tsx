import Link from "next/link";
import React from "react";

export const ContactFormLink = (p: { children: React.ReactNode; mode?: "navigate" | "scroll" }) => {
  const { mode = "scroll" } = p;
  return <Link href={mode === "scroll" ? "#contact-form" : "/contact"}>{p.children}</Link>;
};
