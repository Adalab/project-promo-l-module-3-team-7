import "../style/layout/_form.scss";


function Input(props) {
    return (
        <>
            <label className="form__label" htmlFor={props.name}>
                {props.label}
            </label>
            <input
                className={"form__input js-" + props.name + " js-input-text"}
                type={props.type}
                name={props.name}
                id={props.name}
                placeholder={props.placeholder}
                required
            />
        </>

    )

}
Input.defaultProps = { type: 'text' };
export default Input;