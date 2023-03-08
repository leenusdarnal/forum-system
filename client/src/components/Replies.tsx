import { useState } from 'react'

const Replies = () => {
  const [reply, setReply] = useState('')

  const handleSubmitReply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ reply })
    setReply('')
  }
  return (
    <main>
      <form
        className=' flex flex-row w-full gap-10 justify-center now'
        onSubmit={(e) => handleSubmitReply(e)}
      >
        <div className='grow md:ml-10'>
          <label htmlFor='thread' className='text-xl font-medium'>
            Title/Description
          </label>
          <input
            type='text'
            name='thread'
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            required
            className='border-2 w-full h-14 text-2xl p-5'
          />
        </div>
        <button className='text-white bg-purple-900 h-14 mt-6 md:w-60 w-full'>
          CREATE THREAD
        </button>
      </form>
    </main>
  )
}

export default Replies
