import React, { SFC, useState, ChangeEvent, FormEvent } from 'react'
import InputField from './InputField'
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

  const getValue = (e: E) => {
    e.preventDefault()
    if (val.trim() !== '' && val.length >= 3) {
      onGetValue(val)
      setVal('')
    }
  }

  return (
    <form onSubmit={getValue} className='form-field'>
      <InputField
        onChange={(value: E) => setVal(value.currentTarget.value)}
        value={val}
        placeholder='Describe your todo here ....'
      />
    </form>
  )
}

export default Form
