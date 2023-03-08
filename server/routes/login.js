const Login = (req, res, users) => {
  const { email, password } = req.body

  let result = users.filter(
    (user) => user.email === email && user.password === password
  )

  if (result.length !== 1) {
    console.log(`Incorrect credentials`)
    return res.json({
      error: 'Incorrect credentials',
    })
  }
  console.log(`Login successfully`)
  res.json({
    message: 'Login successfully',
    id: result[0].id,
  })
}

export default Login
