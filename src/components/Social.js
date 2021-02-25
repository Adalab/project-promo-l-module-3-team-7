import "../style/layout/Preview.scss";

function Social(props) {
  return (
      <li className="logo__list--item js-logo-list hidden">
        <a className={"link__card js-preview-" + props.aClass} title="">
          <i className={"fa fa-" + props.iClass}></i>
        </a>
      </li>
  );
}

Social.defaultProps = { type: 'text' };
export default Social;