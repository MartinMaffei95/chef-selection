import { FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends PropsWithChildren {
  sectionId?: string
  className?: string
}
const Section: FC<Props> = ({ children, sectionId, className }) => {
  return (
    <section
      className={twMerge(
        'bg-neutral-100 rounded-md p-2 w-full h-full min-h-full',
        className
      )}
      id={sectionId}
    >
      {children}
    </section>
  )
}

export default Section
