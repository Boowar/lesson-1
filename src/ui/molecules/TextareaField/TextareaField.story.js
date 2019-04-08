import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextareaField } from './TextareaField'
import { boolean, select, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/molecules', module).add(
  'TextareaField',
  withState({ value: '' })(({ store }) => (
    <TextareaField
      disabled={boolean('disabled', false)}
      placeholder={text(
        'placeholder',
        'Например, прошу представляться при звонке',
      )}
      label={text('label', 'Комментарий')}
      value={store.state.value}
      onChange={value => store.set({ value })}
      onBlur={action('onBlur')}
      onFocus={action('onFocus')}
    />
  )),
)
