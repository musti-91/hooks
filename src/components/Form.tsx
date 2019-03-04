import React, { SFC, useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react'

interface iOwnProps {
  onGetValue(val: string): void
}

type E = FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>
/**
 * @author
 * @function @Form
 **/

const Form: SFC<iOwnProps> = ({ onGetValue }) => {
  const [val, setVal] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const getValue = (e: E) => {
    e.preventDefault()
    if (val.trim() !== '' && val.length >= 3) {
      onGetValue(val)
      setVal('')
    }
  }

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <form onSubmit={getValue} className='form-field'>
      <input
        ref={inputRef}
        onChange={(value: E) => setVal(value.currentTarget.value)}
        value={val}
        placeholder='Describe your todo here ....'
      />
    </form>
  )
}

export default Form
