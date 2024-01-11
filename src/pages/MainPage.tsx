import { Link, useLocation } from 'react-router-dom';
import { RecordCard } from '../components/RecordCard';
import { allCardsList } from '../utils/mocData/allCardsList';

const MainPage = () => {
  const location = useLocation();
  return (
    <ul className="font-serif grid grid-cols-2 gap-4 sm:grid-cols-4">
      {allCardsList.map(({ id, artist, images, album, price }) => {
        return (
          <li key={id}>
            <Link to={`/record-details/${id}`} state={{ from: location }}>
              <RecordCard
                key={id}
                id={id}
                artist={artist}
                images={images}
                album={album}
                price={price}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MainPage;
