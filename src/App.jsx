import './App.css'
import Article from './components/Article.jsx'
import { GlobalContext } from './context/index.js';
import { router } from './routers/index.jsx';
import { RouterProvider } from 'react-router-dom';
function App() {
  const user = {
    username : 'Dayat'
  };
  return (
    <div>
      <GlobalContext.Provider value={user}>
<RouterProvider router={router}/>      
</GlobalContext.Provider>
    </div>
  )
}

export default App;
