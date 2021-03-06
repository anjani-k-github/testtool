import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import ProductScreen   from './screens/ProductScreen'
import Header from './components/Header';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Router>
    <Header/>
    <main className="py-3">
      <Container>
       <Route path="/"  component ={HomeScreen} exact />
       <Route path="/product/:id" component={ProductScreen}  />
      </Container>
    </main>
    <Footer/>
   
   </Router>
  );
  
}

export default App;
