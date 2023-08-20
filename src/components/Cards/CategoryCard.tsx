import { Hide, Image, Show } from '@chakra-ui/react'
import { FC } from 'react'
import { Category } from '../../interfaces'
import { useNavigate } from 'react-router-dom'

type Props = {
  category: Category
}
const CategoryCard: FC<Props> = ({ category }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate(`/search?tags=${category?.tag}`)}
      className="flex flex-col items-center justify-center basis-1/12"
    >
      <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-neutral-50 shadow-sm md:h-36 md:w-36 relative">
        <Image
          className="object-cover  aspect-square w-full h-full md:brightness-50 "
          src={category.image}
          alt={`${category.label} image`}
        />
        <Show above="md">
          <p className="font-bold font-serif text-base md:text-xl tracking-widest  absolute text-neutral-100 bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2">
            {category.label}
          </p>
        </Show>
      </div>
      <Hide above="md">
        <p className="font-bold font-serif text-base md:text-xl tracking-widest">
          {category.label}
        </p>
      </Hide>
    </div>
  )
}

export default CategoryCard
