import './App.css';
import AllCart from './component/AllCart/AllCart';
import Header from './component/Header/Header';

function App() {
  return (
    <div >
      {/* this is header part */}
      <Header></Header>
      {/* main part */}
      <AllCart></AllCart>
    </div>
  );
}

export default App;
