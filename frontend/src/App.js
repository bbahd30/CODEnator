import logo from './logo.svg';
import './App.css';
import { AppBar, Avatar, Button, Paper, Toolbar, Typography, Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainFile from './Components/MainFile';
import OutputFile from './Components/OutputFile';
import ImageForm from './Components/Forms/ImageForm';
import TableForm from './Components/Forms/TableForm';
import NavbarForm from './Components/Forms/Navbarform';
import NavbarRenderer from './Components/Renderers/NavbarRenderer';
import ButtonForm from './Components/Forms/ButtonForm';
import ButtonRenderer from './Components/Renderers/ButtonRenderer';
import DropdownForm from './Components/Forms/DropdownForm';
import DropdownRenderer from './Components/Renderers/DropdownRenderer';

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
