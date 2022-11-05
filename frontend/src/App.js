import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainFile from './Components/MainFile';
import OutputFile from './Components/OutputFile';
import ImageForm from './Components/Forms/ImageForm';

function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainFile />} />
          <Route path="/output" element={<OutputFile />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
