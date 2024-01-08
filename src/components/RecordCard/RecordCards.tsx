import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { FC } from 'react';

type RecordCardProps = {
  id: string;
  artist: string;
  images: string;
  album: string;
  price: string;
};

export const RecordCard: FC<RecordCardProps> = ({
  id,
  artist,
  images,
  album,
  price,
}) => {
  return (
    <div className="cursor-pointer" onClick={() => console.log(id)}>
      <Card shadow="sm">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            width="100%"
            alt={artist}
            className="h-[200px] w-full object-cover "
            src={images}
          />
        </CardBody>
        <CardFooter className="block">
          <h4 className="text-lg text-black">
            {album.length > 32 ? album.substring(0, 32) + '...' : album}
          </h4>
          <h5 className="text-base text-gray-600">{artist}</h5>
          <p className="text-base text-black">${price}</p>
        </CardFooter>
      </Card>
    </div>
  );
};
