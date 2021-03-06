
import './App.css';
import Main from "./components/main";
import Header from "./components/header";
import { Route } from 'react-router-dom'
import Footer from "./components/footer";
import About from "./components/about";
import International from "./components/international";
import MainSved from "./components/main-sved";
import History from "./components/history";
import Creating from "./components/creating";
import Timetable from "./components/timetable";
import Accord from "./components/Accordion";
import Staffs from "./components/staffs";
import Structure from "./components/structure"
import Education from "./components/education"
import Logistic from "./components/logistics"
import Finance from "./components/Finance";
import Finance2 from "./components/Finance2";
import Directions from "./components/Direction/directions";
import AboutDirect from "./components/Direction/aboutDirect";
import Chairs from "./components/Direction/chairs";


function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path="/" component={() => <Main/>} />
        <Route exact path="/about" component={() => <About />} />

        <Route exact path="/international" component={() => <International />} />
        <Route exact path="/info" component={() => <MainSved />} />
        <Route exact path="/history" component={() => <History />} />
        <Route exact path="/creating" component={() => <Creating />} />
        <div className="container">
              <Route exact path="/documents" component={() => <Accord />} />
              <Route exact path="/student" component={() => <Timetable />} />
              <Route exact path="/staff" component={() => <Staffs />} />
              <Route exact path="/structure" component={() => <Structure />} />
              <Route exact path="/logistic" component={() => <Logistic />} />
              <Route exact path="/pay" component={() => <Finance />} />
              <Route exact path="/finance" component={() => <Finance2 />} />
              <Route exact path="/education" component={() => <Education />} />
              <Route exact path="/directions" component={() => <Directions />} />
              <Route exact path="/aboutDirect" component={() => <AboutDirect />} />
              <Route exact path="/chairs" component={() => <Chairs />} />
        </div>
        <Footer />
    </div>
  );
}

export default App;
