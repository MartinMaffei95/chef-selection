import { FC } from 'react';
import { Tip } from '../../interfaces';
import { useNavigate } from 'react-router-dom';
import { Image } from '@chakra-ui/react';

type Props = {
  tip: Tip;
};
const TipCard: FC<Props> = ({ tip }) => {
  const navigate = useNavigate();
  return (
    <article
      onClick={() => navigate(`/recipes/${tip?.id}`)}
      className="bg-neutral-100 shadow-md rounded-md overflow-hidden flex flex-col h-[70vh]"
    >
      <div className="w-full basis-3/4 overflow-hidden relative">
        <Image
          className="h-full w-full"
          objectFit={'cover'}
          objectPosition={'0 45%'}
          src={tip?.imageUrl}
          alt={tip?.title}
        />
      </div>
      <section className="px-4 basis-1/4 flex flex-col justify-around">
        <h4 className="font-semibold text-lg underline">{tip?.title}</h4>
        <div
          className="
              flex gap-4 justify-around items-center py-2
              [&>div]:flex [&>div]:items-center [&>div]:gap-2"
        >
          <div>
            Dificultad
            <p>Pasta</p>
          </div>
          <div>{tip?.tags[0] || ''}</div>
        </div>
        <div className="p-2 py-4">{tip.description}</div>
      </section>
    </article>
  );
};

export default TipCard;
