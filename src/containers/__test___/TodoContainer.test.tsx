import * as React from 'react'
import { shallow, mount } from 'enzyme'
import TodoContainer from '@containers/TodoContainer'
import Form from '@components/Form'
import ListItem from '@components/ListItem'

describe('TodoContainer', () => {
  const wrapper = shallow(<TodoContainer />)
  const handleFn = jest.fn()
  it('should return true if true', () => {
    expect(wrapper.hasClass('todo-container')).toBe(true)
  })

  it('should render element', () => {
    expect(wrapper.isEmptyRender()).toBeFalsy()
  })

  it(`should render 'Form' without crashing`, () => {
    const shall = shallow(<Form onGetValue={handleFn} />)
    mount(<Form onGetValue={() => {}} />)
  })

  it(`should have 'ul' element, with it's class `, () => {
    expect(wrapper.find('ul').hasClass('list')).toEqual(true)
    expect(wrapper.childAt(3)).toBeTruthy()
  })

  it(`should render 'ListItem' without crashing`, () => {
    const item = { id: '1', subject: 'something', complete: true }
    const shall = shallow(<ListItem onChecked={handleFn} onDelete={handleFn} key={1} item={item} />)
    mount(<ListItem onChecked={() => {}} onDelete={() => {}} key={'1'} item={item} />)
  })

  it(`should have 'h2' element`, () => {
    expect(wrapper.find('h2').hasClass('')).toBeTruthy()
  })
})
