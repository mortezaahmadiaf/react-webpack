import React, { useEffect } from "react";
import { connect } from "react-redux";
import { language } from "../../../../redux/actions/language";

const page1 = (props) => {
  useEffect(() => {}, []);
  return (
    <div className="flex flex-column w-full h-100 bg-gray-400 text-black justify-content-center align-items-center ">
      <div>
        WELCOME TO REACT{" "}
        <span className="text-red-500 text-8xl mx-3"> WEB </span> COMPONENT
      </div>

      <div className="mt-6">please resize web page to see mobile component</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps, { language })(page1);
