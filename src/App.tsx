import { Provider } from 'react-redux';
import store from './store';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main'
import SideNav from './components/SideNav'
import './App.css'

const App = () => {

  const welcome = (<>
    <SideNav /><Main />
  </>)

  return (
    <div className="App">
      <Provider store={store} >
        <Routes>
          <Route path="/" element={welcome} ></Route>
        </Routes>
      </Provider>
    </div>
  )
}

export default App
