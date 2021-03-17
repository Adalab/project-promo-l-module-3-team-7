import '../style/layout/Preview.scss';
import PropTypes from 'prop-types';
import Social from './Social';

function Preview(props) {
  const handleResetClick = () => {
    props.resetUserData();
  };

  
  return (
    <section className='section__card'>
      <div className='section__container'>
        <button className='reset js-reset' onClick={handleResetClick}>
          <i className='fa fa-trash'></i>Reset
        </button>
        <div
          className={`card palette3card js_preview-card palette-${props.selectedPalette}`}
        >
          <div
            className='card__titles'
            style={
              props.colors.color2
                ? { borderLeft: `5px solid ${props.colors.color2}` }
                : {}
            }
          >
            <h3
              className='card__titles--name js-preview-name'
              style={{ color: props.colors.color1 }}
            >
              {props.name || 'Nombre apellidos'}
            </h3>
            <h4 className='card__titles--job js-preview-job'>
              {props.job || 'Programadora front end'}
            </h4>
          </div>
          <div
            className='card__image js__profile-image'
            style={{ backgroundImage: `url(${props.avatar})` }}
          ></div>
          <div className='card__links--container'>
            <ul className='logo__list'>
              <Social
                aClass='tel'
                iClass='mobile'
                href={`tel:${props.phone}`}
                color1={props.colors.color1}
                color3={props.colors.color3}
              />
              <Social
                aClass='email'
                iClass='envelope-o'
                href={`mailto:${props.email}`}
                color1={props.colors.color1}
                color3={props.colors.color3}
              />
              <Social
                aClass='linkedin'
                iClass='linkedin'
                href={`https://www.linkedin.com/in/${props.linkedin}`}
                color1={props.colors.color1}
                color3={props.colors.color3}
              />
              <Social
                aClass='github'
                iClass='github-alt'
                href={`https://github.com/${props.github}`}
                color1={props.colors.color1}
                color3={props.colors.color3}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Preview.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Preview;
