import React from 'react'
import { mount, shallow, render } from 'enzyme'
import renderer from 'react-test-renderer'
import App from '@containers/App'

describe('App', () => {
  const wrapper = shallow(<App />)
  it('should have Hooks text', () => {
    mount(<App />)
  })
  it('should have .container as classname', () => {
    expect(wrapper.hasClass('container')).toBe(true)
  })
})