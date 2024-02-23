import Navigation from "@/modules/Navigation";
import React, { FC, ReactNode } from "react";

const DashboardLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col w-full gap-8">
      <Navigation />
      {children}
    </div>
  );
};

export default DashboardLayout;
