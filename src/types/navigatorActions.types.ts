export type NavigatorActions =
  | { onClick: (...args: unknown[]) => void; href?: never }
  | { onClick?: never; href: string }
