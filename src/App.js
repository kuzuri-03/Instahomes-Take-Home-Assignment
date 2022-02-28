import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store/store';
import { Parent, History } from './pikachu/searchIndex';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Parent /> */}
        <Router>
          <ul style={{ listStyle: "none", display: 'flex', textDecoration: "none", }}>
            <li style={{ margin: 10 }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ margin: 10 }}>
              <Link to="/history">Previous Search History</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Parent />} />
            <Route exact path='/history' element={<History />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
