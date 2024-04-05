import * as React from 'react'

import { Checkbox } from '../checkbox'

export type CheckboxGroupItemValue = React.ComponentProps<
  typeof Checkbox
>['value']
