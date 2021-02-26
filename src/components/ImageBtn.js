import React, { useState}  from 'react';

const ImageBtn = props => {
    const hiddenFileInput = React.useRef(null);
    const [fileUploaded, setFileUploaded] = useState();
    const [previewFileUploaded, setPreviewFileUploaded] = useState();
   
    const handleClick = event => {
        hiddenFileInput.current.click();
    };

    const handleSelectedFile = event => {
        setFileUploaded(event.target.files[0]);
        var reader = new FileReader();
        reader.onload = e => {
            setPreviewFileUploaded(e.target.result);
        }
        reader.readAsDataURL(event.target.files[0]);
    }; 


    return (
        <div className="form__display--image">
            <div>
                <label className="form__label js-label-image" htmlFor="photo">
                    Imagen de perfil
                </label>
                <button
                    className="btn__submit--image js__profile-trigger"
                    type="submit"
                    value="Anadir imagen"
                    name="photo"
                    id="photo"
                    required
                    onClick={handleClick}
                >
                    Añadir imagen
                </button>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleSelectedFile}
                    name=""
                    className="btn__submit--image action__hiddenField js__profile-upload-btn"
                />
            </div>
            <div className="form__preview--image js__profile-preview"
                style={{ backgroundImage: `url("${previewFileUploaded}"`}}>
            </div>
        </div>
    );

}

export default ImageBtn;