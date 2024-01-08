import { RecordCard } from '../components/RecordCard';
import { allCardsList } from '../utils/mocData/allCardsList';

const MainPage = () => {
  return (
    <div className="font-serif grid grid-cols-2 gap-4 sm:grid-cols-4">
      {allCardsList.map(({ id, artist, images, album, price }) => {
        return (
          <RecordCard
            key={id}
            id={id}
            artist={artist}
            images={images}
            album={album}
            price={price}
          />
        );
      })}
    </div>
  );
};

export default MainPage;
