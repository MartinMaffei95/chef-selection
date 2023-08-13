import { Image } from '@chakra-ui/react';
import { BiSolidBowlHot } from 'react-icons/bi';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ingredient } from '../../interfaces';

type Props = {
  ingredient: Ingredient;
};
const IngredientCard: FC<Props> = ({ ingredient }) => {
  const navigate = useNavigate();
  return (
    <article
      onClick={() => navigate(`/recipes/${ingredient?.id}`)}
      className="bg-neutral-100 shadow-md rounded-md overflow-hidden flex flex-col h-[70vh]"
    >
      <div className="w-full basis-3/4 overflow-hidden relative">
        <Image
          className="h-full w-full"
          objectFit={'cover'}
          objectPosition={'0 45%'}
          src={ingredient?.image}
          alt={ingredient?.name}
        />
      </div>
      <section className="px-4 basis-1/4 flex flex-col justify-around">
        <h4 className="font-semibold text-lg underline">{ingredient?.name}</h4>
        <div
          className="
              flex gap-4 justify-around items-center py-2
              [&>div]:flex [&>div]:items-center [&>div]:gap-2"
        >
          <div>
            <BiSolidBowlHot />
            <p>Pasta</p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default IngredientCard;
