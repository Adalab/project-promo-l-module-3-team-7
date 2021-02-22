import React from "react";

function Collapsable(props) {
  return (
    <>
      <legend className="collapsable__header js-collapsable-header">
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
    </>
  );
}

export default Collapsable;
