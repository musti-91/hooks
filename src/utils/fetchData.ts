const fetchData = async (type: string, id?: string | number) => {
  let req
  switch (type) {
    case 'user':
      req = await fetch(`http://jsonplaceholder.typicode.com/users/${id}`)
      break
    case 'users':
      req = await fetch(`http://jsonplaceholder.typicode.com/users`)
      break
    case 'todo':
      req = await fetch(`http://jsonplaceholder.typicode.com/todo/${id}`)
      break
    case 'todos':
      req = await fetch(`http://jsonplaceholder.typicode.com/todos`)
      break
    default:
      req = await fetch('')
  }
  return req.json()
}

export default fetchData
