import React, { useState, useEffect } from 'react';
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  // Подписываемся на контекст данных пользователя
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const handleChangeName = (e)=>{setName(e.target.value)};

  const handleChangeDescription = (e) =>{setDescription(e.target.value)};

  const handleSubmit  = (e) =>{
    e.preventDefault();
    onUpdateUser({
    name: name,
    about: description,
  });
  };

  return (
    <PopupWithForm title='Редактировать профиль' name='profile' button='Сохранить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__block-input"><input id="full-name" className="popup__input" type="text" name="fullname"
        placeholder="Имя" value={name} onChange={handleChangeName} required minLength="2" maxLength="40" />
        <span id="full-name-error" className="popup__error"></span>
      </div>
      <div className="popup__block-input"><input id="description" className="popup__input" type="text" name="description"
        placeholder="О себе" value={description} onChange={handleChangeDescription} required minLength="2" maxLength="200" />
        <span id="description-error" className="popup__error"></span>
      </div>
    </PopupWithForm>
  );
};

export default EditProfilePopup;