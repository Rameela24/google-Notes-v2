import React from 'react';
import { BrowserRouter as Router, Routes,Route,  } from 'react-router-dom';
import Main from './components/Main';
import ArchivedNotes from './components/ArchivedNotes'; // Import ArchivedNotes component

function App() {
  return (
    <Router>
      {/* <Switch> */}
      <Routes>
      <Route  path="/" element={<Main />} /> {/* Route for the main component */}
      <Route path="/archived" element={<ArchivedNotes />} /> {/* Route for ArchivedNotes */}
      </Routes>
        
      {/* </Switch> */}
    </Router>
  );
}

export default App;
