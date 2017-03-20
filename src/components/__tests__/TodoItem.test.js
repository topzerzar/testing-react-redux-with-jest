import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../TodoItem'

// Describe what to test
describe('TodoItem', () => {
  // Test Scenario
  it('match its snapshot - not complete', () => {
    const component = shallow(<TodoItem text="Not Complete" />);
    expect(component).toMatchSnapshot()
  })

  it('match its snapshot - complete', () => {
    const component = shallow(<TodoItem text="Has Complete" complete />);
    expect(component).toMatchSnapshot()
  })

  it('render correct structure', () => {
    const component = shallow(<TodoItem text="Hello" />);
    expect(component.is('li')).toBe(true)
  })

  it('has complete class if receive complete props', () => {
    const component = shallow(<TodoItem text="Hello" complete />);
    expect(component.hasClass('complete')).toBe(true)
    expect(component.text()).toBe('Hello')
  })
})

