import React, { useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm.js";


function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(()=>{
    setName('');
    setLink('');
  },[isOpen])

  const handleChangeName = (e) => { setName(e.target.value) };

  const handleChangeLink = (e) => { setLink(e.target.value) };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link,
    });
  };


  return (
    <PopupWithForm title='Новое место' name='card' button='Создать' isOpen={ isOpen } onClose={ onClose } onSubmit={ handleSubmit }>
      <div className="popup__block-input"><input id="card-title" className="popup__input" type="text" name="name"
        placeholder="Название" value={ name } onChange={ handleChangeName } required minLength="1" maxLength="30" />
        <span id="card-title-error" className="popup__error"></span>
      </div>
      <div className="popup__block-input"><input id="card-link" className="popup__input" type="url" name="link"
        placeholder="Ссылка на картинку" value={ link } onChange={ handleChangeLink } required />
        <span id="card-link-error" className="popup__error"></span>
      </div>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
