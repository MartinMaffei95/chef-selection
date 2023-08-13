import { Image, Tooltip } from '@chakra-ui/react';
import { FC } from 'react';
import { Category } from '../../interfaces';
import { useNavigate } from 'react-router-dom';

type Props = {
  category: Category;
};
const CategoryCard: FC<Props> = ({ category }) => {
  const navigate = useNavigate();
  return (
    <Tooltip label="Salads" aria-label="Salad Category">
      <div
        onClick={() => navigate(`/search?tags=${category?.tag}`)}
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
  );
};

export default CategoryCard;
