import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
type ReplyList = {
  text: string
  name: string
}
const Replies = () => {
  const [reply, setReply] = useState('')
  const [replyList, setReplyList] = useState<ReplyList[]>([])
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  const { id } = useParams()

  useEffect(() => {
    const fetchReplies = async () => {
      try {
        const response = await fetch(
          'http://localhost:4000/api/thread/replies',
          {
            method: 'POST',
            body: JSON.stringify({ id }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        const data = await response.json()
        setReplyList(data.replies)
        setTitle(data.title)
      } catch (error) {
        console.error(error)
      }
    }
    fetchReplies()
  }, [id])

  const addReply = async () => {
    try {
      const response = await fetch('https://localhost:4000/api/create/reply', {
        method: 'POST',
        body: JSON.stringify({
          id,
          userId: localStorage.getItem('_id'),
          reply,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      alert(data.message)
      navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmitReply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ reply })
    addReply()
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
          Send
        </button>
      </form>
      <div>
        {replyList.map((reply) => (
          <div>
            <p>{reply.text}</p>
            <div>by {reply.name}</div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Replies
