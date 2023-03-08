import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const loginUser = () => {
    fetch('http://localhost:4000/api/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert(data.error)
        } else {
          alert(data.message)
          navigate('/home')
          localStorage.setItem('_id', data.id)
        }
      })
      .catch((err) => console.error(err))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ email, password })
    loginUser()
    setEmail('')
    setPassword('')
  }

  return (
    <main className='flex flex-col gap-24 items-center justify-center  '>
      <h1 className='mt-8 text-5xl font-bold '>Log into your account</h1>
      <form className=' flex flex-col w-3/6' onSubmit={(e) => handleSubmit(e)}>
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
            className='border-2 w-full h-14 p-2'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button className='text-white bg-purple-900 h-16 md:w-64 w-full mb-6'>
            SIGN IN
          </button>
          <p className='text-2xl'>
            Don't have an account?
            <span className='text-purple-800'>
              <Link to='/register'> Create one</Link>
            </span>
          </p>
        </div>
      </form>
    </main>
  )
}

export default Login
