import React from "react";

function ImagePopup({ card, onClose }) {
    const link = card.link;
    return (
        <section className={ `popup popup_img ${card.link ? 'popup_opened' : ''}` }>
            <div className="popup__content popup__content_img">
                <button className="popup__close" type="button" onClick={ onClose }></button>
                <div className="popup__image" style={ { backgroundImage: `url(${link})` } } />
                <h2 className="popup__title-img">{ card.name }</h2>
            </div>
        </section>
    );
};

export default ImagePopup;