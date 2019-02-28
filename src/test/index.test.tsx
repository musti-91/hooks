import React from 'react'
import App from '../containers/App'
import { mount } from 'enzyme'

describe('index.test.ts', () => {
  it('should render App without crashing', () => {
    mount(<App />)
  })
})
