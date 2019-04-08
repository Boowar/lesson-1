import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent } from '@ui/molecules'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

storiesOf('ui/pages', module).add('SignIn', () => {
  return (
    <PageTemplate>
      <Header title="Ввод номера телефона" />
      <Divider />
      <Flex1>
        <Wrapper>
          <HBox height={9} />
          <Body2>На указанный телефон будет выслан код подтверждения</Body2>
          <HBox height={20} />
          <TextField
            label="Номер телефона"
            startAdornment="+7"
            placeholder="9XXXXXXXXX"
            onChange={action('onChange')}
            value=""
          />
        </Wrapper>
      </Flex1>
      <Wrapper>
        <ButtonAccent
          disabled={boolean('disabled', false)}
          loading={boolean('loading', false)}
          onPress={action('press')}
        >
          Отправить
        </ButtonAccent>
      </Wrapper>
    </PageTemplate>
  )
})
