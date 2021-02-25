import React from "react";

function Collapsable(props) {
    return (
        <div className="collapsable__header js-collapsable-header">
            <h2 className="tittle__collapsable">
                <i className={"fa fa-collapsable " + props.icon} aria-hidden="true"></i
                >{props.title}
            </h2>
            <i className="fa fa-angle-up" aria-hidden="true"></i>
        </div>

    );
}

export default Collapsable;