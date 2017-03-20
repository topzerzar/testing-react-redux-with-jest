import React from 'react';
import { storiesOf } from '@kadira/storybook';
import TodoItem from '../TodoItem';

storiesOf('TodoItem', module)
  .add('Not Have', () => (
    <TodoItem text="Not Complete" />
  ))
  .add('Have Complete', () => (
    <TodoItem text="Have Complete" complete />
  ));
