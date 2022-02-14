import { useState } from 'react';


export default function Login({ onAuthUser }) {
  const [values, setValues] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(v => ({
      ...v,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthUser({ password: values.password, username: values.username })
    setValues({ username: '', password: '' });
  }

  return (
    <div className="auth">
      <p className="auth__title">Вход</p>
      <form onSubmit={ handleSubmit } className="auth__form">
        <input className="auth__input" required id="username" name="username"
          placeholder="Email" type="email" value={ values.username } onChange={ handleChange } />
        <input className="auth__input" required id="password" name="password"
          placeholder="Пароль" type="password" value={ values.password } onChange={ handleChange } />
        <div className="login__button-container">
          <button type="submit" className="auth__button">Войти</button>
        </div>
      </form>
    </div>
  )
}
