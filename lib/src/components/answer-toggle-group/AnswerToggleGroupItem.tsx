import * as ToggleGroup from '@radix-ui/react-toggle-group'
import * as React from 'react'

import { Answer } from './Answer'

type AnswerToggleGroupItemProps = React.ComponentProps<typeof ToggleGroup.Item> &
  React.ComponentProps<typeof Answer>

export const AnswerToggleGroupItem = React.forwardRef(({
  children,
  value,
  disabled,
  ...rest
}: AnswerToggleGroupItemProps, ref: React.ForwardedRef<HTMLButtonElement | null>) => {

  return (
    <ToggleGroup.Item {...rest} value={value} disabled={disabled} ref={ref} asChild>
      <Answer
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Stitches polymorphic components issue due to `as="button"`
        as="button"
      >
        {children}
      </Answer>
    </ToggleGroup.Item>
  )
})
