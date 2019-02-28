import React, { SFC, FormEvent, ChangeEvent } from 'react'

type E = FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>

interface iOwnProps {
  onChange(e: E): void
  value: string
}

/**
 * @author
 * @function @InputField
 **/

const InputField: SFC<iOwnProps> = ({ onChange, value }) => {
  return <input onChange={onChange} value={value} />
}

export default InputField
