import logo from './logo.svg';
import './App.css';
import RegularExpression from './components/RegularExpression';
import Appbar from './components/Appbar';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Appbar />
      <Container>
        <RegularExpression />
      </Container>
    </div>
  );
}

export default App;
