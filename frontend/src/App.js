import logo from './logo.svg';
import './App.css';
import { AppBar, Avatar, Button, Paper, Toolbar, Typography, Container, TableContainer } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainFile from './Components/MainFile';
import OutputFile from './Components/OutputFile';
import NavbarRenderer from './Components/Renderers/NavbarRenderer';
import TableRenderer from './Components/Renderers/TableRenderer';
import TableForm from './Components/Forms/TableForm';


function App()
{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TableRenderer />} />
          <Route path="/output" element={<OutputFile />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
