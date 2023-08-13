import { Link } from 'react-router-dom';
import { FC } from 'react';
import { Image } from '@chakra-ui/react';
import { twMerge } from 'tailwind-merge';

type Props = {
  image: string;
  alt: string;
  title: string;
  imageClassName?: string;
  to: string;
};
const LinkCard: FC<Props> = ({ image, alt, title, imageClassName, to }) => {
  return (
    <Link
      className="p-2 rounded-md bg-neutral-50 shadow-md h-24 flex items-center"
      to={to}
    >
      <div
        className={twMerge(
          'h-full flex-shrink-0 aspect-square rounded-xl overflow-hidden flex items-center justify-center',
          imageClassName
        )}
      >
        <Image
          className="h-full aspect-square object-cover"
          src={image}
          alt={alt}
        />
      </div>

      <div className=" flex  items-center justify-center w-full text-2xl font-bold">
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default LinkCard;
