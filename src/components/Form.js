import '../style/layout/_card-page.scss';
import '../style/layout/_design.scss';
import '../style/layout/_form.scss';
import '../style/layout/_share.scss';
import Collapsable from './Collapsable.js';
import Palette from './Palette.js';
import Input from './Input.js';

function Form(props) {
  return (
    <form method='' action='' className='collapsable-container'>
      <Collapsable title='Diseña' icon='fa-object-ungroup' fieldset='design'>
        <h3 className='design__title'>colores</h3>
        <Palette value='1' checked='true' />
        <Palette value='2' />
        <Palette value='3' />
      </Collapsable>
      <Collapsable title='Rellena' icon='fa-keyboard-o' fieldset='form'>
        <div className='form js-form'>
          <Input
            name='name'
            label='Nombre completo'
            placeholder='Nombre completo'
            value={props.name}
            handleInput={props.handleInput}
          />
          <Input
            name='job'
            label='Puesto'
            placeholder='Profesión'
            value={props.job}
            handleInput={props.handleInput}
          />
          <div className='form__display--image'>
            <div>
              <label className='form__label js-label-image' htmlFor='photo'>
                Imagen de perfil
              </label>
              <button
                className='btn__submit--image js__profile-trigger'
                type='submit'
                value='Anadir imagen'
                name='photo'
                id='photo'
                required
              >
                Añadir imagen
              </button>
              <input
                type='file'
                name=''
                className='btn__submit--image action__hiddenField js__profile-upload-btn'
              />
            </div>
            <div className='form__preview--image js__profile-preview'></div>
          </div>
          <Input
            name='email'
            label='email'
            placeholder='nombre.apellido@example.com'
            type='email'
            value={props.email}
            handleInput={props.handleInput}
          />
          <Input
            name='phone'
            label='Telefono'
            placeholder='+34 666666666'
            type='tel'
            value={props.tel}
            handleInput={props.handleInput}
          />

          <Input
            name='linkedin'
            label='Linkedin'
            placeholder='Nombre de usuario de LinkedIn'
            value={props.linkedin}
            handleInput={props.handleInput}
          />
          <Input
            name='github'
            label='Github'
            placeholder='Nombre de usuario de GitHub'
            value={props.github}
            handleInput={props.handleInput}
          />
        </div>
      </Collapsable>
      <Collapsable title='Comparte' icon='fa-share-alt' fieldset='share'>
        <button className='button__create link_animation js-create-btn'>
          <i className='fa fa-address-card-o' aria-hidden='true'></i>Crear
          tarjeta
        </button>

        <div className='confirm__share js-card-result share-hidden'>
          <p className='confirm__share--title'>La tarjeta ha sido creada:</p>
          <a className='confirm__share--link' href=''></a>
        </div>
        <div className='rectangle'></div>
      </Collapsable>
    </form>
  );
}

export default Form;
