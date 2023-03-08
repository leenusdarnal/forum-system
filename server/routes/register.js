import generateID from '../utilites/generadId.js'

const Register = async (req, res, users) => {
  const { email, password, username } = req.body
  const id = generateID()
  console.log({ email, password, username })
  //👇🏻 ensures there is no existing user with the same credentials
  const result = users.filter(
    (user) => user.email === email && user.password === password
  )
  if (result.length === 0) {
    const newUSer = { id, email, password, username }
    users.push(newUSer)
    //👇🏻 returns a success message
    console.log('Account created successfully')
    return res.json({ message: 'Account created successfully' })
  } else {
    //👇🏻 if there is an existing user
    console.log(`user already exists`)
    return res.json({ error: 'USer already exists' })
  }
}

export default Register
