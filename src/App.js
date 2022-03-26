import './App.css';
import AllCart from './component/AllCart/AllCart';
import Header from './component/Header/Header';
import Anser from './Qustion-Anser/Anser';

function App() {
  return (
    <div >
      {/* this is header part */}
      <Header></Header>
      {/* main part */}
      <AllCart></AllCart>
      {/* Anser and Qustion part */}
      <Anser></Anser>
    </div>
  );
}

export default App;
