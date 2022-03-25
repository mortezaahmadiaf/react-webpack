import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

class WidthC extends React.Component {
  constructor(props) {
    super();
    this.state = { width: 0 };
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.handleWindowSizeChange);
    this.setState({ width: window.innerWidth });
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  };
  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  render() {}
}

const WidthF = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const store = useSelector((state) => state);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };
  return {
    width,
    name: store.language.name,
    direction: store.language.direction,
  };
};

export { WidthF, WidthC };
