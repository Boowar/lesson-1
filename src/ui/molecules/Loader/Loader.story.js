import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, color } from '@storybook/addon-knobs'
import { Loader } from './Loader'

storiesOf('ui/molecules', module).add('Loader', () => (
  <Loader loading={boolean('Loading', true)} color={color('Color', '#000')} />
))
