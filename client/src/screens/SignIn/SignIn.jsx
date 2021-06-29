import { useState } from 'react'
import { signIn } from "../../services/users"
import { useHistory } from "react-router-dom"

const SignIn = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    errorMsg: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const onSignIn = async (e) => {
    e.preventDefault()
    const { setUser } = props
    try {
      const user = await signIn(form)
      setUser(user)
      history.push('/items') // <---double check later
    } catch (error) {
      console.error(error)
      setForm({
        isError: true,
        errorMsg: 'Invalid Credentials',
        username: '',
        password: '',
      })
    }
  }

  const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return (
        <button type='submit' className={toggleForm}>
          {form.errorMsg}
        </button>
      )
    } else {
      return <button type='submit'>Sign In</button>
    }
  }
  const { username, password } = form;
  return (
    <div className='form-container'>
      <h3>Sign In</h3>
      <form onSubmit={onSignIn}>
        <label>Username</label>
        <input
          required
          type='text'
          name='username'
          value={username}
          placeholder='Enter Username'
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  );
}

export default SignIn;
