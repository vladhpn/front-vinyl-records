import { Button, Chip, Divider, Image } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { allCardsList } from '../utils/mocData/allCardsList';

interface Card {
  format: string;
  description: string;
  price: string;
  artist: string;
  album: string;
  diameter: number;
  rpm: number;
  genre: string;
  style: string;
  recordLabel: string;
  weight: number;
  condition: string;
  coverCondition: string;
  images: string;
  id: string;
  releaseYear: number;
}

const DetailsCardPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState<Card | null>(null);

  useEffect(() => {
    const fetchCardByID = () => {
      const cardData = allCardsList.find((card) => card.id === id);

      if (cardData) {
        setCard(cardData);
      } else {
        console.log(`Card with id ${id} not found.`);
      }
    };

    fetchCardByID();
  }, [id]);

  if (card === null) {
    return <p>Loading...</p>;
  }

  const {
    artist,
    album,
    price,
    images,
    condition,
    releaseYear,
    description,
    diameter,
    rpm,
    genre,
    style,
    recordLabel,
    weight,
  } = card;

  return (
    <div className="flex basis-1/4 flex-row pt-3">
      <div className="flex-1">
        <Image
          shadow="sm"
          width="100%"
          alt={artist}
          className="h-full w-full object-cover "
          src={images}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-10 ">
        <div className="">
          <h2 className="text-4xl">{artist}</h2>
          <p className="text-xl">{album}</p>
          <p>{price}$</p>
          <Divider orientation="horizontal" />
          <div className="flex flex-wrap gap-4 pt-2">
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {releaseYear}
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {condition}
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {diameter}"
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {rpm} rpm
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {genre}
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {style}
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {recordLabel}
            </Chip>
            <Chip
              className="border-blue-400 text-blue-400"
              radius="sm"
              size="sm"
              variant="bordered">
              {weight}gr.
            </Chip>
          </div>
        </div>
        <div>
          <p className="text-gray-500">{description}</p>
        </div>
        <div>
          <Button color="primary">Contact seller</Button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCardPage;

// При кліку на карточку на головній сторінці відбувається перехід на сторінку детальної інформації однієї картки

// Потрібно знайти потрібну картку по id і її відмалювати

// В роутінгу має бути id цієї карточки

// приклад: /record-details?id=14

// Створити сторінку детальної інформації по платівці

// Зображення
// Опис з усією інформацією
// Ціна
// Власник платівки
// Кнопка для зв'язку з власником ( перехід до чату)
