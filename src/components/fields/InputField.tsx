import React, { SFC, FormEvent, ChangeEvent, useRef, useEffect } from 'react'

type E = FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>

interface iOwnProps {
  onChange(e: E): void
  value: string
  placeholder?: string | 'placeholder'
  type?: string | 'text'
}

/**
 * @author
 * @function @InputField
 * 1.@useRef
 * 2.@useEffect
 * 3.@useDebugValue
 **/

const InputField: SFC<iOwnProps> = ({ onChange, value, placeholder, type }) => {
  const inputEl = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputEl.current.focus()
  })

  return (
    <input onChange={onChange} value={value} ref={inputEl} type={type} placeholder={placeholder} />
  )
}

export default InputField
