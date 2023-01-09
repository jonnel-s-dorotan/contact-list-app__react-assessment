import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Main = ({ children }: Props) => {
  return (
    <main className='min-h-full bg-fmNeutralLightGrayishCyanBG mt-14'>
      {children}
    </main>
  )
}

export default Main
