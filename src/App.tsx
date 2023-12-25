import { Header } from './components/Header';
import { LoginPage, RegistrationPage } from './pages';

function App() {
  return (
    <div className="min-h-screen bg-lightGray">
      <div className="container">
        <Header />
        <LoginPage />
        <RegistrationPage />
      </div>
    </div>
  );
}

export default App;
