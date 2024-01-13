import { Button, Chip, Divider, Image } from '@nextui-org/react';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allCardsList } from '../../utils/mocData/allCardsList';
import { NotFoundPage } from '../NotFoundPage';
import { DetailsCard } from './types';

export const DetailsCardPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState<DetailsCard | null>(null);

  const fetchCardByID = useCallback(() => {
    const cardData = allCardsList.find((card) => card.id === id);

    if (!cardData) return;
    setCard(cardData);
  }, [id]);

  useEffect(() => {
    fetchCardByID();
  }, [fetchCardByID, id]);

  if (!card) return <NotFoundPage />;

  return (
    <div className="flex basis-1/4 flex-row pt-3">
      <div className="flex-1">
        <Image
          shadow="sm"
          width="100%"
          alt={card.artist}
          className="h-full w-full object-cover "
          src={card.images}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-10 ">
        <div className="">
          <h2 className="text-4xl">{card.artist}</h2>
          <p className="text-xl">{card.album}</p>
          <p>{card.price}$</p>
          <Divider orientation="horizontal" />
          <div className="flex flex-wrap gap-4 pt-2">
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {card.releaseYear}
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {card.condition}
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {card.diameter}"
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {card.rpm} rpm
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {card.genre}
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {card.style}
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {card.recordLabel}
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {card.weight}gr.
            </Chip>
          </div>
        </div>
        <div>
          <p className="text-gray-500">{card.description}</p>
        </div>
        <div>
          <Button color="primary">Contact seller</Button>
        </div>
      </div>
    </div>
  );
};
