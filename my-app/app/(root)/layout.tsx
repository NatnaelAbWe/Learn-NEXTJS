import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-3xl">ROOT LAYOUT</h1>
      <h2 className="text-3xl text-center">NAVBAR</h2>
      {children}
    </div>
  );
};

export default Layout;
