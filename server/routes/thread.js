import generateID from '../utilites/generadId.js'

const createThread = async (req, res, threadList) => {
  const { thread, userId } = req.body
  const threadId = generateID()
  threadList.unshift({
    id: threadId,
    title: thread,
    userId,
    replies: [],
    likes: [],
  })

  console.log({ thread, userId, threadId })
  res.json({ message: 'Thread created successfully', threads: threadList })
}

export default createThread
