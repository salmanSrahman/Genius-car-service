import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (

    <div>
      <Link
        style={{
          color: match ? "red" : "black",
          border: match ? "3px solid #202C45" : "none",
          background: match ? "#f1f1f1" : "none",
          textDecoration: match ? "none" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
