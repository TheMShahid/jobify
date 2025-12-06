import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React, { PropsWithChildren } from "react";

// function layout({ children }: { children: React.ReactNode }) {
function layout({ children }: PropsWithChildren) {
  return <div>{children}</div>;
}

export default layout;
