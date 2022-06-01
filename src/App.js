import logo from './logo.svg';
import AppStyle from './App.module.css';



import TodoPage from './pages/TodoPage/TodoPage';
import { useEffect } from 'react';

function App() {


  useEffect(() => {

  }, [])

  return (
    <div className={AppStyle.App}>
      <div className='progress'>

      </div>
      <TodoPage/>
    </div>
  );
}

export default App;
