import React from 'react'

import { styled } from '~/stitches'

import { sidedrawerItemStyles } from './Sidedrawer.styles'
import { SidedrawerAccordionItem } from './SidedrawerAccordion/'

const StyledLink = styled('a', sidedrawerItemStyles)
const StyledButton = styled('button', sidedrawerItemStyles)

type SidedrawerItemProps = {
  active?: boolean
} & (
  | {
      href?: never
      id: string
      onClick?: never
    }
  | {
      href: string
      id?: never
      onClick?: never
    }
  | {
      href?: never
      id?: never
      onClick: () => void
    }
)

/**
 * This component takes few different arguments composition.
 * The common argument is "active" which determine if an item has additional "active styles"
 * Another param determines what kind of element is rendered (link, button or Accordtion.Item)
 * @param {string} href - This param decides about returning a Link as an output of this component
 * @param {string} id - This param decides about returning an Accordtion.Item as an output of this component
 * @param {string} onClick - This param decides about returning a Button as an output of this component
 * @returns Link, Button or Accordtion.Item depends on passed pros
 */
export const SidedrawerItem: React.FC<SidedrawerItemProps> = ({
  active,
  children,
  href,
  id,
  onClick,
  ...remainingProps
}) => {
  if (id) {
    return (
      <SidedrawerAccordionItem value={id} {...remainingProps}>
        {children}
      </SidedrawerAccordionItem>
    )
  }

  if (href) {
    return (
      <StyledLink active={active} href={href} {...remainingProps}>
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledButton active={active} onClick={onClick} {...remainingProps}>
      {children}
    </StyledButton>
  )
}
