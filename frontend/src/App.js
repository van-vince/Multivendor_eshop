
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigation,
} from "react-router-dom";

import {
  LoginPage,
  SignupPage,
  } from './Routes.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
