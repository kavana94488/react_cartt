
import { BrowserRouter,Routes, Route
 } from 'react-router-dom';
import Home from './Components/Home/Home';
import Hotel from './Components/Hotel/Hotel';
import List from './Components/List/List';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Hotel />} path="/hotel/:id" />
          <Route element={<List />} path="/hotel" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
