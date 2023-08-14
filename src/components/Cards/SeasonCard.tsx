import { Image, Tooltip } from '@chakra-ui/react'
import { FC } from 'react'
import { Category } from '../../interfaces'

type Props = {
  category: Category
  onClick: () => void
}
const SeasonCard: FC<Props> = ({ category, onClick }) => {
  return (
    <Tooltip label="Salads" aria-label="Salad Category">
      <div
        onClick={onClick}
        className="flex flex-col items-center justify-center basis-1/12"
      >
        <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-neutral-50 shadow-sm">
          <Image
            className="object-cover  aspect-square w-full h-full "
            src={category.image}
            alt={`${category.label} image`}
          />
        </div>
        <p className="font-bold tracking-widest whitespace-normal">
          {category.label}
        </p>
      </div>
    </Tooltip>
  )
}

export default SeasonCard
