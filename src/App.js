import './App.css';
import Pagination from './components/Pagination';
import Search from './components/Search';
import Stories from './components/Stories';
// import { useContext } from 'react';
// import { AppContext } from './components/Context';
// import { useGlobalContext } from './components/Context';

document.body.style.backgroundColor="#15133c";
function App() {

  return (
    <>
     <div className="first">
      <marquee><h1 align="center"><font color="Blue">GET THE NEWS</font></h1></marquee>

     </div>
      <Pagination/>
      <Search/>
      <Stories/>
    </>
  );
}


export default App;
