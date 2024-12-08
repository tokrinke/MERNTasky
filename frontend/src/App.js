import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import CreateTask from './pages/CreateTask';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='big-cont'>
          {/* <img 
          src="https://cdn.discordapp.com/attachments/780858392607719465/1315056367618232380/9d572d58237f0f571da169dc56301001.png?ex=6756052e&is=6754b3ae&hm=7212ad427b9ad40c073c00765982d919a9d75247403d49e532f3d1874e4b4968&" 
          alt="" className='img' 
           /> */}
          <Navbar/>
          <div className="section">
            <Routes>
              <Route
                path='/'
                element= {<Homepage />}
              />
            </Routes>
            <CreateTask />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
