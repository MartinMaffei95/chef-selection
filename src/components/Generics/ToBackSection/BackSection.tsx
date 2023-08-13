import { Divider } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
type Props = {
  text: string;
  containerClassName?: string;
  redirectTo?: string;
};
const BackSection: FC<Props> = ({ text, containerClassName, redirectTo }) => {
  const navigate = useNavigate();
  const back = () => {
    redirectTo ? navigate(redirectTo) : navigate(-1);
  };
  return (
    <section
      className={twMerge(
        'bg-neutral-100 w-full rounded p-2 flex gap-4 mb-4',
        containerClassName
      )}
    >
      <button className="text-sm flex items-center " onClick={back}>
        <MdKeyboardArrowLeft />
        Atras
      </button>
      <Divider
        className="relative z-50 h-full"
        orientation="vertical"
        borderColor={'blackAlpha.400'}
      />
      <span className="truncate text-base font-light">{text}</span>
    </section>
  );
};

export default BackSection;
