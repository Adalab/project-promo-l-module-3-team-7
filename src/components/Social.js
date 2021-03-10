import "../style/layout/Preview.scss";

function Social(props) {
  return (
    // <li className='logo__list--item js-logo-list hidden'>
    <li className="logo__list--item js-logo-list">
      <a
        className={"link__card js-preview-" + props.aClass}
        title=""
        href={props.href}
      >
        <i className={"fa fa-" + props.iClass}></i>
      </a>
    </li>
  );
}

export default Social;
