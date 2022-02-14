import _ from "lodash";
import React, { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { language } from "../../../../redux/actions/language";
import "./style.less";
const page1 = (props) => {
  useEffect(() => {}, []);
  return (
    <div className=" w-full flex flex-column bg-grey  pt-10 color1">
      <div className="grid px-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5">
        <div className="bg-primary basis-1/4 h-40 rounded-lg  m-3">01</div>
        <div className="bg-primary h-40 rounded-lg m-3 ">02</div>
        <div className="bg-primary h-40 rounded-lg m-3">03</div>
        <div className="bg-primary h-40 rounded-lg m-3">04</div>
        <div className="bg-primary h-40 rounded-lg m-3">05</div>
        <div className="bg-primary h-40 rounded-lg m-3">06</div>
        <div className="bg-primary h-40 rounded-lg m-3">07</div>
        <div className="bg-primary h-40 rounded-lg m-3">08</div>
        <div className="bg-primary h-40 rounded-lg m-3">09</div>
      </div>
      {/* <div className="grid grid-rows-3 grid-flow-col gap-4 pb-3">
        <div className="row-start-2 row-span-2 bg-red h-40 rounded-lg">01</div>
        <div className="row-end-3 row-span-2  bg-red h-40 rounded-lg">02</div>
        <div className="row-start-1 row-end-4  bg-red h-40 rounded-lg">03</div>
      </div>

      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ">
        <div className="col-span-2 bg-purple m-2">01</div>
        <div className="col-span-2 bg-purple m-2">02</div>
        <div className="bg-purple m-2">03</div>
        <div className=" bg-purple m-2">04</div>
        <div className="bg-purple m-2">05</div>
      </div> */}
      <div className="row p-0 m-0 ">
        <div className="h-40   p-4 col-12 colsm-12 col-md-5 col-lg-4 col-xl-3">
          <div className="bg-primary w-100 h-100 rounded-lg"></div>
        </div>
        <div className="h-40  p-4 col-12 colsm-12 col-md-5 col-lg-4 col-xl-3">
          <div className="bg-primary w-100 h-100 rounded-lg"></div>
        </div>
        <div className=" h-40   p-4 col-12 colsm-12 col-md-5 col-lg-4 col-xl-3">
          <div className="bg-primary w-100 h-100 rounded-lg"></div>
        </div>
        <div className=" h-40   p-4 col-12 colsm-12 col-md-5 col-lg-4 col-xl-3">
          <div className="bg-primary w-100 h-100 rounded-lg"></div>
        </div>
        <div className=" h-40   p-4 col-12 colsm-12 col-md-5 col-lg-4 col-xl-3">
          <div className="bg-primary w-100 h-100 rounded-lg"></div>
        </div>
        <div className=" h-40   p-4 col-12 colsm-12 col-md-5 col-lg-4 col-xl-3">
          <div className="bg-primary w-100 h-100 rounded-lg"></div>
        </div>
        <div className=" h-40  p-4 col-12 colsm-12 col-md-5 col-lg-4 col-xl-3">
          <div className="bg-primary w-100 h-100 rounded-lg"></div>
        </div>
        <div className=" h-40  p-4 col-12 colsm-12 col-md-5 col-lg-4 col-xl-3">
          <div className="bg-primary w-100 h-100 rounded-lg"></div>
        </div>
        <div className=" h-40   p-4 col-12 colsm-12 col-md-5 col-lg-4 col-xl-3">
          <div className="bg-primary w-100 h-100 rounded-lg"></div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-1/4 bg-primary h-40 m-3 rounded-lg">01</div>
        <div className="basis-1/4 bg-yellow h-40 m-3 rounded-lg">02</div>
        <div className="basis-1/4 bg-green h-40 m-3 rounded-lg">03</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps, { language })(page1);
