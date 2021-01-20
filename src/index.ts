import { reset } from 'stitches-reset'
export { Box, Flex, Select } from './primitives'

import { css, styled } from './stitches'

css.global(reset)()

export { css, styled }
