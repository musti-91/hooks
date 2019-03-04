import React, { SFC } from 'react'
import { Store } from '@stores/index'
import ButtonField from './ButtonField'

type E = HTMLButtonElement

interface iProps {
  hasButton?: boolean
  buttonTitle?: string
  title: string
  error?: any
  onButtonClick?: (e: E) => void
}
/**
 * @author
 * @function @TextField
 **/

const TextField: SFC<iProps> = ({ title, hasButton, buttonTitle, error, onButtonClick }) => {
  return !error ? (
    <Store.Consumer>
      {({ count, theme }) => (
        <div style={theme}>
          <h3>
            {title}
            {count}
          </h3>
          {hasButton && <ButtonField onButtonClick={onButtonClick} title={buttonTitle} />}
        </div>
      )}
    </Store.Consumer>
  ) : (
    <div className='error'>{error}</div>
  )
}

export default TextField
