import "../style/layout/Preview.scss";

function Social(props) {
  return (
    // <li className='logo__list--item js-logo-list hidden'>
    <li
      className="logo__list--item js-logo-list"
      style={props.color3 ? { border: `2px solid ${props.color3}` } : {}}
    >
      <a
        className={"link__card js-preview-" + props.aClass}
        title=""
        href={props.href}
      >
        <i
          className={"fa fa-" + props.iClass}
          style={{ color: props.color1 }}
        ></i>
      </a>
    </li>
  );
}

export default Social;
