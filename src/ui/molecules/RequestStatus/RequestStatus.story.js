import React from 'react'
import { storiesOf } from '@storybook/react'
import { RequestStatus } from './RequestStatus'
import { boolean, select } from '@storybook/addon-knobs'

storiesOf('ui/molecules', module).add('RequestStatus', () => (
  <RequestStatus
    text={select(
      'text',
      {
        loading: 'Телефон отправлется',
        success: 'Номер успешно отправлен',
        error: 'Произошла неизвестная ошибка',
        none: null,
      },
      null,
    )}
    success={boolean('success', false)}
    error={boolean('error', false)}
  />
))
