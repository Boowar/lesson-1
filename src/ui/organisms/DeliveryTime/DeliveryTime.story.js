import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { DeliveryTime } from './DeliveryTime'

storiesOf('ui/organisms', module).add('DeliveryTime', () => (
  <DeliveryTime
    label={text('label', 'Время доставки')}
    disabled={boolean('disabled', false)}
  />
))
