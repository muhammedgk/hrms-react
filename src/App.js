
import './App.css';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import Dashboord from './layouts/Dashboord';
import { Container } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      <Navi />
     <Container className="main">
        <Dashboord />
      </Container>
      
    </div>
  );
}

export default App;
