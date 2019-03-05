import fetchData from '@utils/fetchData'

describe('fetchData  function', () => {
  it('should return response for giving value', async () => {
    const users = await fetchData('users').then(res => res)
    expect(users).toHaveLength(10)
  })

  it('should return response for giving value', async () => {
    const todos = await fetchData('todos').then(res => res)
    expect(todos).toHaveLength(200)
  })

  it('should return 1 object as user', async () => {
    const user = await fetchData('user', 1).then(res => res)
    expect(user).not.toBeNull()
    expect(user).toHaveProperty('id')
    expect(user.id).toEqual(1)
  })
  it('should return 9 object as user', async () => {
    const user = await fetchData('user', 9).then(res => res)
    expect(user).not.toBeNull()
    expect(user).toHaveProperty('id')
    expect(user.id).toEqual(9)
  })

  it('should return 9 object as user', async () => {
    const todo = await fetchData('todo', 9).then(res => res)
    expect(todo).not.toBeNull()
    expect(todo).toHaveProperty('id')
    expect(todo.id).toEqual(9)
  })

  it('should return 9 object as todo', async () => {
    const todo = await fetchData('todo', 9).then(res => res)
    expect(todo).not.toBeNull()
    expect(todo).toHaveProperty('id')
    expect(todo.id).toEqual(9)
  })
})
