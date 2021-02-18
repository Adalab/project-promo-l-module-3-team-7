import "../style/layout/Preview.scss";

function Preview() {
    return (
      <section className="section__card">
        <div className="section__container">
          <button className="reset js-reset">
            <i className="fa fa-trash"></i>Reset
          </button>
          <CardPreview />
        </div>
      </section>
    );
}

export default Preview;