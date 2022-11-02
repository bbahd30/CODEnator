import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import InputForm from './Components/InputForm';
import ImageForm from './Components/Forms/ImageForm';
import ParaForm from './Components/Forms/ParaForm';
import MainFile from './Components/MainFile';

function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainFile />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
