import './App.css';
import { Fragment } from 'react';
import LeftPanel from './leftPanel/LeftPanel';
import Navbar from './rightPanel/navbar/Navbar';
import RightPanel from './rightPanel/RightPanel';


function App() {
  return (
    <Fragment>
      <div className="sticky">
        <LeftPanel/>
        <RightPanel/>
      </div>
    </Fragment>
  );
}

export default App;
