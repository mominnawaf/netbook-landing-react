import './App.css';
import Header from './components/Header/Header';
import Base from './components/Base/Base';
import Aboutus from './components/Aboutus/Aboutus';
import Achivements from './components/Achivements/Achivements';
import Community from './components/Community/Community';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <div className='base-container'>
      <Header />
      <Base />
      <Aboutus />
      <Achivements />
      <Community/>
      <Footer />
    </div>
  );
}

export default App;
