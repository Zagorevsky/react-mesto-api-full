// импортируем ключ авторзации на сервере
// import {authorization} from './utils.js'
import { handlerError } from './auth.js'

// используем готовый класс из прошлой работы для получения данных с сервера
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // запрос карточек из базы данных
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'GET',
      headers: this._headers
    })
      .then(handlerError);
  }

  // запрос данных профиля с сервера
  getInitialProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
      .then(handlerError);
  }

  // запись новой карточки на сервер
  addCardToServer(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(handlerError);
  }

  // запись данных профиля на серве
  updateProfileToServer(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(handlerError);
  }

  // запись данных  автара на серве
  updateAvatarToServer(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(handlerError);
  }

  // переключатель лайков на сервере
  changeLikeCardStatus(id, isLiked) {
    return isLiked ?  this._addLikesToServer(id) :this._deleteLikesToServer(id)
  }

  // добавить лайк на сервер
  _addLikesToServer(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    })
      .then(handlerError);
  }

  // удалить лайк с сервера
  _deleteLikesToServer(id) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(handlerError);
  }

  // удалить карту с сервера
  deleteCardToServer(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then(handlerError);
  }
}

// создаем экземпляр класса Api и экспоортируем его https://mesto.nomoreparties.co/v1/cohort-29
export const api = new Api({
  baseUrl: 'https://api.zagor.students.nomoredomains.work',
  headers: {
    // authorization: authorization,
    'Content-Type': 'application/json'
  }
});
