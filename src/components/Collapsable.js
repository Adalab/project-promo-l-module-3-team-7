import React, { useState } from "react";

function Collapsable(props) {
  // let [isOpen, setOpen] = useState(true);
  // let [classClose, setClass] = useState("");
  // const handleLegendClick = () => {
  //   setOpen(!isOpen);
  //   setClass((classClose = isOpen ? "collapsable--close" : ""));
  // };

  let [isClose, setClose] = useState(props.isClose);
  let [classClose, setClassClose] = useState(
    isClose ? "collapsable--close" : ""
  );
  const handleLegendClick = () => {
    setClose(!isClose);
    setClassClose(isClose ? "" : "collapsable--close");
  };

  return (
    <fieldset
      className={`collapsable__${props.fieldset} collapsable ${classClose} js-collapsable`}
    >
      <legend
        className="collapsable__header js-collapsable-header"
        onClick={handleLegendClick}
      >
        <h2 className="tittle__collapsable">
          <i
            className={"fa fa-collapsable " + props.icon}
            aria-hidden="true"
          ></i>
          {props.title}
        </h2>
        <i className="fa fa-angle-up" aria-hidden="true"></i>
      </legend>
      <div
        className={`collapsable__content collapsable__content--${props.fieldset}`}
      >
        {props.children}
      </div>
    </fieldset>
  );
}

export default Collapsable;

// let [isOpen, setOpen] = useState(true);
//   let [classClose, setClass] = useState("");
//   const handleLegendClick = () => {
//     setOpen(!isOpen);
//     setClass((classClose = isOpen ? "collapsable--close" : ""));
//   };

// CLOSE

// let [isClose, setClose] = useState(true);
//   let [classClose, setClassClose] = useState(
//     isClose ? "collapsable--close" : ""
//   );
//   const handleLegendClick = () => {
//     setClose(!isClose);
//     setClassClose(isClose ? "collapsable--close" : "");
//   };
