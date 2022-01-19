import './App.css';
import Header from './components/Header/Header';
import Base from './components/Base/Base';
import Aboutus from './components/Aboutus/Aboutus';
import Achivements from './components/Achivements/Achivements';

function App() {
  return (
      <div className='base-container'>
      <Header />
      <Base />
      <Aboutus />
      <Achivements />
    </div>
  );
}

export default App;
