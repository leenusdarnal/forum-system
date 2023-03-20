const Like = (req, res, threadList, users) => {
  const { threadId, userId } = req.body

  const result = threadList.filter((thread) => thread.id === threadId)
  const threadLikes = result[0].likes
  const authentication = threadLikes.filter((user) => user === userId)

  if (authentication.length === 0) {
    threadLikes.push(userId)
    return res.json({
      message: "You've reated to this post!",
    })
  }
  return res.json({
    error_messgae: 'You can on react once!',
  })
}

export default Like
