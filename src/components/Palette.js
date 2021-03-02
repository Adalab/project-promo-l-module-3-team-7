import "../style/layout/_design.scss";

function Palette(props) {

  return (
    <label className="display-block design__square-label">
      <input
        type="radio"
        name="palette"
        className="design__square-radio js_palette-select"
        value={props.value}
        onChange={props.changePalette}
        checked={props.selectedPalette === props.value}

      />
      <ul className={`palette-${props.value}-election`}>
        <li className="design__square-color color-1">Color A</li>
        <li className="design__square-color color-2">Color B</li>
        <li className="design__square-color color-3">Color C</li>
      </ul>
    </label>
  );
}

export default Palette;
