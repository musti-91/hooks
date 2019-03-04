import React from 'react'
import { mount, shallow } from 'enzyme'
import App from '@containers/App'

describe('App', () => {
  const wrapper = shallow(<App />)
  it('should have Hooks text', () => {
    mount(<App />)
  })
  it('should have ```.spinner``` as classname', () => {
    // high order component with class '.spinner'
    expect(wrapper.hasClass('spinner')).toBe(true)
  })
})
