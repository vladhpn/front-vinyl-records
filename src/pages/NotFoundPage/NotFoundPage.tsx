import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <p className="mt-20 text-9xl text-gray-500">404</p>
      <p className="text-gray-500">Page not found...</p>
      <Button
        className="mt-20"
        color="primary"
        variant="solid"
        onClick={() => navigate('/')}>
        To main
      </Button>
    </div>
  );
};
export default NotFoundPage;
