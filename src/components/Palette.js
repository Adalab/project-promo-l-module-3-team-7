import React, { useState } from "react";
import "../style/layout/_design.scss";

function Palette(props) {
  // const [selectedPalette, setSelectedPalette] = useState(3);

  // const handleChangePalette = (ev) => {
  //   const newValue = parseInt(ev.currentTarget.value);

  //   setSelectedPalette(newValue);

  //   // console.log(palette);
  // };

  // const handleChangePalette = (ev) => {
  //   console.log(ev.target.value);
  //   const field = ev.currentTarget.checked;
  //   const newValue = parseInt(ev.currentTarget.value);
  //   console.log(newValue);
  //   if (field) {
  //     setSelectedPalette(newValue);
  //   }

  //   // console.log(palette);
  //   console.log(selectedPalette);
  // };

  return (
    <label className="display-block design__square-label">
      <input
        type="radio"
        name="palette"
        className="design__square-radio js_palette-select"
        value={props.value}
        onChange={props.changePalette}
        checked={props.selectedPalette === props.value}
        // checked={props.checked}
      />
      <ul className={`palette-${props.value}-election`}>
        <li className="design__square-color color-1">Color A</li>
        <li className="design__square-color color-2">Color B</li>
        <li className="design__square-color color-3">Color C</li>
      </ul>
    </label>
  );
}
// Palette.defaultProps = { checked: false };
export default Palette;
