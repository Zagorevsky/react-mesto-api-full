import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete  }) {
  // Подписываемся на контекст CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__container">
            <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
            <div className="profile__overlay" onClick={onEditAvatar}>
              <div className="profile__edit-avatar" ></div>
            </div>
          </div>
          <div className="profile__text">
            <h1 className="profile__full-name">{currentUser.name}</h1>
            <button className="profile__edit" type="button" onClick={onEditProfile}></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-card" type="button" onClick={onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
          {cards.map(({ key, ...props }) => (<Card key={key} {...props} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />))}
        </ul>
      </section>
    </main>
  );

};

export default Main;
