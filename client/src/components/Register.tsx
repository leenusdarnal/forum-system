import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigtae = useNavigate()

  const signUp = () => {
    fetch('http://localHost:4000/api/register', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        username,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error_message) {
          alert(data.error)
        } else {
          alert('Account created successfully')
          navigtae('/')
        }
      })
      .catch((err) => console.error(err))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ username, email, password })
    signUp()
    setUsername('')
    setEmail('')
    setPassword('')
  }

  return (
    <main className='flex flex-col gap-12 items-center justify-center  '>
      <h1 className='mt-8 text-5xl font-bold '>Create an account</h1>
      <form className=' flex flex-col w-3/6' onSubmit={(e) => handleSubmit(e)}>
        <div className='mb-6'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            required
            className='border-2 w-full h-14 text-2xl p-5'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            name='email'
            required
            className='border-2 w-full h-14 text-2xl p-5'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            required
            className='border-2 w-full h-14'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className='text-white bg-purple-900 h-16 md:w-64 w-full mb-6'>
            Register
          </button>
          <p className='text-2xl'>
            Have an account
            <span className='text-purple-800'>
              <Link to='/'> Sign in</Link>
            </span>
          </p>
        </div>
      </form>
    </main>
  )
}

export default Register
