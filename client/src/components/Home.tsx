import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'

const Home = () => {
  const [thread, setThread] = useState('')
  const [threadList, setThreadList] = useState([])

  const navigate = useNavigate()

  const createThread = () => {
    fetch('http://localhost:4000/api/create/thread', {
      method: 'POST',
      body: JSON.stringify({
        thread,
        userID: localStorage.getItem('_id'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message)
        setThreadList(data.threads)
      })
      .catch((err) => console.error(err))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ thread })
    createThread()
    setThread('')
  }
  useEffect(() => {
    const checkUser = () => {
      if (!localStorage.getItem('_id')) {
        console.log(`user not logged`)

        navigate('/')
      } else {
        console.log('Authenticated')
      }
    }
    checkUser()
  }, [])
  return (
    <>
      <Nav />
      <main className='flex flex-col gap-24  items-center justify-center  content-center '>
        <h2 className='mt-8 text-4xl font-bold '>Create a Thread</h2>
        <form
          className=' flex flex-row w-full gap-10 justify-center now'
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className='grow md:ml-10'>
            <label htmlFor='thread' className='text-xl font-medium'>
              Title/Description
            </label>
            <input
              type='text'
              name='thread'
              value={thread}
              onChange={(e) => setThread(e.target.value)}
              required
              className='border-2 w-full   h-14 text-2xl p-5'
            />
          </div>
          <button className='text-white bg-purple-900 h-14 mt-6 md:w-60 w-full'>
            CREATE THREAD
          </button>
        </form>
      </main>
    </>
  )
}

export default Home
