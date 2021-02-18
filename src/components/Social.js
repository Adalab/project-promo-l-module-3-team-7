import "../style/layout/Preview.scss";

function Social() {
    const items = [
        {
          link: "js-preview-tel",
          icon: "fa-mobile"
        },

        {
            link: "js-preview-github",
            icon: "fa-github-alt"
          },
    ];

    return (
        <ul>
        {items.map(item => {
            return (
                <li key={index} className={ }"logo__list--item js-logo-list hidden">    
                 <a className="link__card + {item.link} "  title="">
                     <i className="fa {item.icon}" aria-hidden="true"></i>
                </a>
            </li>
            );
        })}
      </ul>
         
    );
}

export default Social;