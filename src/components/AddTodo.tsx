import React, { SFC, useState, ChangeEvent, FormEvent } from 'react'

interface iOwnProps {
  onGetValue(val: string): void
}

type E = FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>
/**
 * @author
 * @function @AddTodo
 **/

const AddTodo: SFC<iOwnProps> = ({ onGetValue }) => {
  const [val, setVal] = useState<string>('')

  const getValue = (e: E) => {
    e.preventDefault()
    if (val.trim() !== '' && val.length >= 3) {
      onGetValue(val)
      setVal('')
    }
  }

  return (
    <form onSubmit={getValue} className='form-field'>
      <input
        onChange={(value: E) => setVal(value.currentTarget.value)}
        value={val}
        placeholder='Describe your todo here ....'
      />
    </form>
  )
}

export default AddTodo
