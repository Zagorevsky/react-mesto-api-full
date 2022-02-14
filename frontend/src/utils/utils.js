// Получаем текущее содержание профиля
export const fullNameProfile = document.querySelector('.profile__full-name');
export const descriptionProfile = document.querySelector('.profile__description');
export const avatarProfile = document.querySelector('.profile__avatar');

// Получаем кнопку редактировать аватар
export const avatarEdit = document.querySelector('.profile__overlay');

// Получаем кнопку редактировать профиль
export const profileEdit = document.querySelector('.profile__edit');
// Получаем кнопку добавить карту
export const buttonAddCard = document.querySelector('.profile__add-card');
// Получаем контейнер для размещения карточек с фото
export const cardsContainer = document.querySelector('.elements');
// Получаем попап для редактирования профиля
export const popupProfile = document.querySelector('.popup_profile');
// Получаем попап для добавления новой карты
export const popupCard = document.querySelector('.popup_card');
// Получаем попап для открытия картинки в попап
export const popupImg = document.querySelector('.popup_img');
// Получаем попап для редактирования аватара
export const popupAvatar = document.querySelector('.popup_avatar');

export const cardSelector = '#element';

// export const fullNameProfilePopup = popupProfile.querySelector('#full-name');
// export const descriptionProfilePopup = popupProfile.querySelector('#description');

// export const popupDelitCard = document.querySelector('.popup_delit-card');

export const config = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// ключ авторизации
// export const authorization = 'd1eaf8fa-cbb9-444a-9cdf-dc241738dbf6'

// тексты кнопок попап
export const buttonTextSave = 'Сохранить';

export const buttonTextCreate = 'Создать';

export const buttonTextLoad = 'Сохранение...';
