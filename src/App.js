
import './App.css';
import Main from "./components/main";
import Header from "./components/header";
import { Route } from 'react-router-dom'
import Footer from "./components/footer";
import About from "./components/about";
import International from "./components/international";
import MainSved from "./components/main-sved";
import Accordion from "./components/Accordion";


function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path="/" component={() => <Main/>} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/international" component={() => <International />} />
        <Route exact path="/info" component={() => <MainSved />} />
        <Route exact path="/documents" component={() => <Accordion />} />
        <Footer />
    </div>
  );
}

export default App;
