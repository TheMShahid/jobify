import { AreaChart, Layers, AppWindow } from "lucide-react";
import React from "react";

type NavLinks = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLinks[] = [
  {
    href: "/add-job",
    label: "add job",
    icon: <Layers />,
  },
  {
    href: "/jobs",
    label: "jobs",
    icon: <AppWindow />,
  },
  {
    href: "/stats",
    label: "stats",
    icon: <AreaChart />,
  },
];

export default links;
