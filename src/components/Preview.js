import '../style/layout/Preview.scss';
import Social from './Social';

function Preview(props) {
  return (
    <section className='section__card'>
      <div className='section__container'>
        <button className='reset js-reset'>
          <i className='fa fa-trash'></i>Reset
        </button>
        <div className={`card palette3card js_preview-card palette-${props.selectedPalette}`}>
          <div className='card__titles'>
            <h3 className='card__titles--name js-preview-name'>{props.name}</h3>
            <h4 className='card__titles--job js-preview-job'>{props.job}</h4>
          </div>
          <div className='card__image js__profile-image'></div>
          <div className='card__links--container'>
            <ul className='logo__list'>
              <Social aClass='tel' iClass='mobile' href={`tel:${props.tel}`} />
              <Social
                aClass='email'
                iClass='envelope-o'
                href={`mailto:${props.email}`}
              />
              <Social
                aClass='linkedin'
                iClass='linkedin'
                href={`https://www.linkedin.com/in/${props.linkedin}`}
              />
              <Social
                aClass='github'
                iClass='github-alt'
                href={`https://github.com/${props.github}`}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Preview;
