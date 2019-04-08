import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled, theme } from '@ui/theme'
import {
  Header,
  TextField,
  TextareaField,
  ButtonAccent,
  SelectField,
  Loader,
  CheckboxWithText,
} from '@ui/molecules'
import { DeliveryTime } from '@ui/organisms'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

storiesOf('ui/pages', module).add('TranslationForm', () => {
  return (
    <PageTemplate>
      <Header icon={'back'} />
      <Flex1>
        <Wrapper>
          <SelectField label={'Страна 1'} value={'Россия'} />
          <HBox />
          <SelectField label={'Страна 2'} value={'Англия'} />
          <HBox />
          {boolean('Поля ввода суммы', false) ? (
            <>
              <Divider />
              <HBox />
              <TextField
                label={'Российский рубль (RUB)'}
                value={''}
                endAdornment={'₽'}
                type={'tel'}
              />
              <TextField
                label={'Фунт стерлингов (GBP)'}
                value={''}
                endAdornment={'£'}
                type={'tel'}
              />
            </>
          ) : null}

          {boolean('loader', false) ? (
            <>
              <Loader />
              <HBox />
            </>
          ) : null}

          <DeliveryTime
            label={'Время доставки'}
            onTimeSet={action('onTimeSet')}
          />

          <TextareaField
            disabled={boolean('disabled', false)}
            placeholder={text(
              'placeholder',
              'Например, прошу представляться при звонке',
            )}
            label={text('label', 'Комментарий')}
            value={text('value', null)}
          />
          <HBox height={theme.paddings.double} />
          <CheckboxWithText
            disabled={boolean('disabled', false)}
            checked={boolean('checked', false)}
            text={text('text', 'Со всеми условиями согласен')}
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
