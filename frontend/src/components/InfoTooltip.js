import React from "react";
import imageNo from "../images/no.png";
import imageOk from "../images/ok.png";

function InfoTooltip({ isRegistrationResult, isOpen, onClose }) {

    return (
        <section className={ `info-tooltip popup ${isOpen ? 'popup_opened' : ''}` }>
            <div className="info-tooltip__content popup__content">
                <button className="popup__close" type="button" onClick={ onClose }></button>
                <div className="info-tooltip__image" style={ { backgroundImage: `url(${isRegistrationResult ? imageOk : imageNo})` } } />
                <h2 className="info-tooltip__title popup__title">{ `${isRegistrationResult ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}` }</h2>
            </div>
        </section>
    );
};

export default InfoTooltip;