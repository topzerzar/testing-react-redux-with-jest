import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../TodoItem'

// Describe what to test
describe('TodoItem', () => {
  // Test Scenario
  it('render correct structure', () => {
    const component = shallow(<TodoItem text="Hello" />);
    expect(component.is('li')).toBe(true)
  })

  it('has complete class if receive complete props', () => {
    const component = shallow(<TodoItem text="Hello" complete />);
    expect(component.hasClass('complete')).toBe(true)
  })
})

