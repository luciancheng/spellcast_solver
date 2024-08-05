import Mainpage from "./components/mainpage"
import Navbar from "./components/navbar"
import Store from './store';
import BackgroundStars from "./components/backgroundstars";
import BackgroundClouds from "./components/backgroundclouds";

function App() {

  return (
    <Store>
      <div className="small-screen text-center text-5xl font-bold">Screen width is too small</div>
      <div className="app">
        <div className="background-div">
          <BackgroundStars numStars={50}/>
        </div>
        <Navbar/>
        <div className="content">
          <Mainpage/>
        </div>
      </div>
    </Store>
  )
}

export default App
