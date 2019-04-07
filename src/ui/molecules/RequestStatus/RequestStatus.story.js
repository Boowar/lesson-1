import React from 'react'
import { storiesOf } from '@storybook/react'
import { RequestStatus } from './RequestStatus'
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('ui/molecules', module).add('RequestStatus', () => (
  <RequestStatus 
  text={text('text', 'Телефон отправляется')} 
  success={boolean('success', false)} 
  error={boolean('error', false)} 
  />
))