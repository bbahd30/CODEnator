import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InputForm from './Components/InputForm';

function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<InputForm />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
