import React, { useEffect } from 'react';
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const avatarRef = React.useRef();

  useEffect(() => {
    avatarRef.current.value = ''
  }, [isOpen])

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm title='Обновить аватар' name='avatar' button='Сохранить' isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <div className="popup__block-input"><input id="avatar-link" ref={avatarRef} className="popup__input" type="url" name="avatar"
        placeholder="Ссылка на аватар" required />
        <span id="avatar-link-error" className="popup__error"></span>
      </div>
    </PopupWithForm>
  )

};

export default EditAvatarPopup;