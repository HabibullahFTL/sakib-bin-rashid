import logo from './logo.svg';
import './App.css';
import Particles from "react-tsparticles";
import { particleOptions } from './particleOptions';
import Home from './componets/Home/Home/Home';

function App() {
  return (
    <div>
      <Particles
        id="tsparticles"
        options={particleOptions}
      />
      <Home/>
    </div>
  );
}

export default App;
