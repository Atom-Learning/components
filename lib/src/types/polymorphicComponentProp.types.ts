/**
 * The goal of these types is to make sure that our polymorphic components accept
 * the correct attributes, and any ref passed onto the polymorphic component has
 * the correct type.
 *
 * For example, when you pass `as="a"`, it should accept an `href` attribute and,
 * the `ref` should be of type `HTMLAnchorElement`.
 *
 * If you pass `as="button"` instead, it should not accept `href` and the `ref`
 * should be of type `HTMLButtonElement`.
 *
 *
 * Taken from:
 * https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 */

/**
 * A generic that is used to capture the `as` prop value
 */
type AsProp<C extends React.ElementType> = {
  as?: C
}

/**
 * A type of the `as` prop, plus any custom defined props.
 */
type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

/**
 * Adds a typed `as` prop to a list of props.
 */
type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = Record<string, unknown>
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

/**
 * Type to capture the `ref` prop type from the element type
 * passed into the `as` prop.
 */
export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref']

/**
 * Usage example:
 *
 * ```tsx
 * type MyComponentProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<
 *   C,
 *   { myProp: string }
 * >
 *
 * const MyComponent: <C extends React.ElementType = 'span'>(
 *   props: MyComponentProps<C>
 * ) => React.ReactElement | null = React.forwardRef(
 *   <C extends React.ElementType = 'span'>(
 *     { children, as, myProp }: MyComponentProps<C>,
 *     ref?: MyComponentProps<C>['ref']
 *   ) => {
 *     ...
 *   }
 * )
 * ```
 */
export type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = Record<string, unknown>
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> }
