import React from 'react'
import ReactDOM from 'react-dom'
import App from '../containers/App'
import { shallow, mount, render } from 'enzyme'

describe('index.test.ts', () => {
  it('should render App without crashing', () => {
    expect(shallow(<App />))
  })
})
