# Hooks

## Best Practices using the new version of React.

### Features

#### 1. Typescript

#### 2. React: ^16.8.3

#### 3. React Router, React-router-dom

#### Head to this article to understand the explanation of hooks.

### [Introduction Hooks](https://reactjs.org/docs/hooks-intro.html)

# Notes:

### source: https://bit.ly/2EOEwk8

## 1. useEffect:

#### A. you should return an element that will be fire in `useEffect` function, where that's called DEPS

```typescript
useEffect(() => {
  setCount(previousState => previousState + 1)
}, [count]) // That's DEPS, and it's save to return it.
```

#### B. For async calls it would be better to use async calls inside your `useEffect`:

```typescript
useEffect(() => {
  const fetchData = async () => {
    let req = await fetch('url')
    return await req.json()
  }
  fetchData().then(res => setUsers(res)
}, [])// DEPS WILL BE SAVE✅
```

## 2. useState:

### It would be better to use function inside your useState instead of directly setting value, doesn't mean it won't work but for better results:

```typescript
// for example counter
setCount(previousState => prepreviousState + 1)
```

3. useCallback

## It would be better for fetching data that you use `useCallback()` function to retrieve data inside `useEffect()`

```typescript
import React, { useEffect, useCallback, useState } from 'react'

function Example(props) {
  const [query, setQuery] = useState('your-init-query')
  const [list, setList] = useState([])

  const fetchData = useCallback(async () => {
    let res = fetch(url + query)
    return res.json()
  }, [query]) // DEPS are ok

  useEffect(() => {
    fetchData().then(setList)
  }, [fetchData]) // DEPS are ok

  return <div>{list.length !== 0 && JSON.stringify(list)}</div>
}
```
