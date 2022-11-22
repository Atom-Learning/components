import * as React from 'react'

import { bases, accents, colorSchemes, styled } from './stitches.colorscheme.config'

type TColorSchemeOwnProps = {
    base?: keyof typeof bases
    accent?: keyof typeof accents
    interactive?: 'loContrast1' | 'loContrast2' | 'hiContrast1' | 'hiContrast2'
}

const StyledColorScheme = styled('div')

type TColorSchemeProps = React.ComponentProps<typeof StyledColorScheme> & TColorSchemeOwnProps

/**
 * @experimental Component has not been finalised. Further design input required. Use with caution.
 */
export const ColorScheme = React.forwardRef<HTMLDivElement, TColorSchemeProps>(({ base = '', accent = '', interactive = '', className, ...rest }, ref) => {
    const c = [
        className,
        colorSchemes[`interactive-${interactive}`],
        colorSchemes[`accent-${accent}`],
        colorSchemes[`base-${base}`],
    ].filter(Boolean).join(' ')

    return <StyledColorScheme ref={ref} className={c} {...rest} />
})

ColorScheme.displayName = 'ColorScheme'
