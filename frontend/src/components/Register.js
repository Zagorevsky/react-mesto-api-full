import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register({ onRegisterUser }) {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(v => ({
      ...v,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterUser({ password: values.password, email: values.email })
  }

  return (
    <div className="auth">
      <p className="auth__title">
        Регистрация
      </p>
      <form onSubmit={ handleSubmit } className="register__form">
        <input className="auth__input" id="email" name="email" type="email"
          value={ values.email } onChange={ handleChange } />
        <input className="auth__input" id="password" name="password" type="password"
          value={ values.password } onChange={ handleChange } />
        <button className="auth__button" type="submit" onSubmit={ handleSubmit }>Зарегистрироваться</button>
      </form>
      <div className="auth__menu">
        <p className="auth__menu-text">Уже зарегистрированы?</p>
        <Link to="/sign-in" className="auth__menu-link">Войти</Link>
      </div>
    </div>
  )
}
