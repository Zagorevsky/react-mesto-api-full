import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ id, idOwner, name, link, likes, onCardClick, onCardLike, onCardDelete }) {
    // Подписываемся на контекст данных пользователя
    const currentUser = React.useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = idOwner === currentUser.id;
    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (`element__trash ${isOwn ? '' : 'element_hidden'}`
    );

    // Определяем есть ли наш лайк
    const isLiked = likes.some(i => i === currentUser.id);
    const likedButtonClassName = (`element__like ${isLiked ? 'element__like_active':''}`)

    const handleCardClick = () => {
      onCardClick({ name, link });
    };

    const handleCardLike = () =>{
      onCardLike ({id, likes});
    }

    const handleDeleteClick = () => {
      onCardDelete ({id})
    }

    return (
        <li className="element">
            <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
            <div className="element__foto" style={{ backgroundImage: `url(${link})` }} onClick={handleCardClick} />
            <div className="element__blok">
                <h2 className="element__title">{name}</h2>
                <div className="element__blok-likes">
                    <button className={likedButtonClassName} type="button" onClick={handleCardLike} ></button>
                    <div className="element__number-likes" >{likes.length}</div>
                </div>
            </div>
        </li>
    );

};

export default Card;