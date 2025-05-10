import './App.css'
import Login from './Components/Login';
import Usestate from './Components/Usestate';
import Useref from './Components/Useref';
import { AuthProvider,useAuth } from './Components/AuthContext';

function LoginToggle() {
  const { loggedIn, setLoggedIn } = useAuth();
  return (
    <div>
      <p>{loggedIn ? '✅ Logged In' : '❌ Logged Out'}</p>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

function App() {
  return (
    <>
    <div>
      <h1>Hello</h1>
      <Login />
      <Usestate />
      <Useref/>
      <AuthProvider>
        <LoginToggle />
      </AuthProvider>
      
    </div>
    </>
  )
}

export default App
