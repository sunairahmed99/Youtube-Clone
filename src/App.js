import './App.css';
import Feedy from './Components/Feedy';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import VideoId from './Components/VideoId';
import Relatedchannel from './Components/Relatedchannel';
import SearchFeed from './Components/SearchFeed';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      
      <Routes>
        
        
        <Route path='/' element={<Feedy/>}></Route>
        <Route path= "/videos/:videoId"  element={<VideoId/>}></Route>
        <Route path= "/channel/:channelId"  element={<Relatedchannel/>}></Route>
        <Route path= "/search/:searchTerm"  element={<SearchFeed/>}></Route>
      </Routes>
    
      </BrowserRouter>
     
     
   
    </div>
  );
}

export default App;
