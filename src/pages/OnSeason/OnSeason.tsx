import { useState } from 'react'
import SeasonCard from '../../components/Cards/SeasonCard'
import BackSection from '../../components/Generics/ToBackSection/BackSection'
import useGetPageData from '../../hooks/useGetPageData'
import { Category, SeasonName, Seasons } from '../../interfaces'
import { getCategoriesOfIngredients } from '../../services/categories.service'
import { getSeasons } from '../../services/season.service'
import IngredientCard from '../../components/Cards/IngredientCard'

const OnSeason = () => {
  interface ExtendedCategory extends Category {
    season: SeasonName
  }
  const [seasonSelected, setSeasonSelected] = useState<SeasonName>('SPRING')
  const stationCategories: ExtendedCategory[] = [
    {
      image: '/src/assets/images/season/spring.avif',
      label: 'Spring',
      tag: 'spring',
      season: 'SPRING',
    },
    {
      image: '/src/assets/images/season/winter.jpg',
      label: 'Winter',
      tag: 'winter',
      season: 'WINTER',
    },
    {
      image: '/src/assets/images/season/autumn.jpg',
      label: 'Autumn',
      tag: 'autumn',
      season: 'AUTUMN',
    },
    {
      image: '/src/assets/images/season/summer.avif',
      label: 'Summer',
      tag: 'summer',
      season: 'SUMMER',
    },
  ]
  const { data } = useGetPageData<Seasons>(
    getSeasons,
    getCategoriesOfIngredients
  )

  return (
    <div>
      <BackSection redirectTo="/" text="Seasons" />
      <div>
        <h3 className="my-4 font-bold text-xl">Seasons</h3>

        <div className="flex gap-2 [&>div]:flex-shrink-0 overflow-auto py-4">
          {stationCategories?.map((cat) => (
            <SeasonCard
              onClick={() => setSeasonSelected(cat?.season)}
              category={cat}
              key={cat.tag}
            />
          ))}
        </div>
      </div>
      <section className="flex flex-col gap-4">
        <h3 className="my-4 font-bold text-xl">
          {data && data[seasonSelected]?.name}
        </h3>
        <div className="flex flex-col gap-4">
          {data && seasonSelected
            ? data[seasonSelected]?.ingredients?.map((ing) => (
                <IngredientCard ingredient={ing} />
              ))
            : null}
        </div>
      </section>
    </div>
  )
}

export default OnSeason
