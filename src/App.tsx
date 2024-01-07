import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.tsx';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
