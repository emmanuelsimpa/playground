import './App.css';
import MonsterApp from './Monster/MonsterApp';
import EcommerceApp from './E-commerce/App';
import 'antd/dist/antd.min.css'
import LandingApp from './landingPage/App';


function App() {
  return (
    <div className="app">
      {/* <MonsterApp/> */}
      <EcommerceApp/>
      {/* <LandingApp/> */}
    </div>
  );
}

export default App;
