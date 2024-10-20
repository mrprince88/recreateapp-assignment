import React from "react";

import s from "./styles.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={s.flex}>
      <div className={s.container}>{children}</div>
    </div>
  );
};

export default Layout;
