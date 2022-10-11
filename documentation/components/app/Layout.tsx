import { Theme } from '@atom-learning/components'
import { Header } from './Header'
import { Meta } from './Meta'


type Props = {
  preview?: boolean
  children: React.ReactNode
}

export const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <Theme as="main" css={{ flexGrow: 1, overflow: 'hidden' }} base="primary" mode="light">{children}</Theme>
    </>
  )
}