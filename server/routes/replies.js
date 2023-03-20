export const Replies = (req, res, threadList) => {
  const { id } = req.body

  const result = threadList.filter((thread) => thread.id === id)
  res.json({
    replies: result[0].replies,
    title: result[0].title,
  })
}

export const addReply = async (req, res, users, threadList) => {
  const { id, userId, reply } = req.body
  const result = threadList.filter((thread) => thread.id === id)
  const user = users.filter((user) => user.id === user.id)

  result[0].replies.unshift({
    userId: user[0].id,
    name: user[0].username,
    text: reply,
  })
  res.json({
    message: 'Response added successfully',
  })
}
