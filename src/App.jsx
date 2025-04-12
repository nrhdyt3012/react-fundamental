import './App.css'
import Article from './components/Article.jsx'
import Homepage from './pages/index.jsx';
import { GlobalContext } from './context/index.js';
function App() {
  const user = {
    username : 'Dayat'
  };
  return (
    <div>
      <GlobalContext.Provider value={user}>
      <Homepage></Homepage>
      </GlobalContext.Provider>
    </div>
  )
}

export default App;
