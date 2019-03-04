import React, { SFC, FormEvent, ChangeEvent, useRef, useEffect, useDebugValue } from 'react'

type E = FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>

interface iOwnProps {
  onChange(e: E): void
  value: string
}

/**
 * @author
 * @function @InputField
 * 1.@useRef
 * 2.@useEffect
 * 3.@useDebugValue
 **/

const InputField: SFC<iOwnProps> = ({ onChange, value }) => {
  const inputEl = useRef(null)
  useEffect(() => {
    inputEl.current.focus()
  })

  useDebugValue(inputEl.current.focus() ? 'focused' : 'not focused')
  return <input onChange={onChange} value={value} ref={inputEl} />
}

export default InputField
