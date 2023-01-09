import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className='container mx-auto px-12 py-6 min-h-screen'>{children}</div>
  )
}

export default Container
