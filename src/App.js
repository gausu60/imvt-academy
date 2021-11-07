
import './App.css';
import Articles from './Articles';
import Banner from './Banner';
import Course from './Course';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Banner/>
      <Main />
      <Course/>
      <Articles  title='Happy Coding !'/>
      <Footer/>
    </div>
  );
}

export default App;
