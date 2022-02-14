import React from "react";
const ScrollToTop = (props) => {
  return (
    <div className={`rootClass flex h-full w-full `}>{props.children}</div>
  );
};
export default ScrollToTop;
