/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Headings from './components/Headings';
import Box from './components/Box';
import Bar from './components/Bar';
import FAQContainer from './components/Faq';


function App() {
  return (
    <Router>
      <Navbar />
      <Headings/>
      <Box/>
      <Bar/>
      <FAQContainer/>
    </Router>
  );
}

export default App;
