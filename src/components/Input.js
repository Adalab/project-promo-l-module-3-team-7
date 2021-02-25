import React, { useState } from 'react';
import '../style/layout/_form.scss';

function Input(props) {
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  const handleChange = (ev) => {
    console.log(`me han clicado`);
    const field = ev.target.name;
    if (field === 'name') {
      setName(ev.target.value);
    } else if (field === 'job') {
      setJob(ev.target.value);
    } else if (field === 'email') {
      setEmail(ev.target.value);
    } else if (field === 'tel') {
      setTel(ev.target.value);
    } else if (field === 'linkedin') {
      setLinkedin(ev.target.value);
    } else if (field === 'github') {
      setGithub(ev.target.value);
    }
  };

  return (
    <>
      <label className='form__label' htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={'form__input js-' + props.name + ' js-input-text'}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.email}
        onChange={handleChange}
        required
      />
    </>
  );
}
Input.defaultProps = { type: 'text' };
export default Input;
