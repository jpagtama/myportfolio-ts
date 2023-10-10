import { Provider } from 'react-redux';
import store from './store';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main'
import SideNav from './components/SideNav'
import NotFound from './components/NotFound'
import './App.css'

const App = () => {

  const welcome = (<div className='min-h-screen'>
    <SideNav /><Main />
  </div>)

  const RedirectCalendar = () => {
    window.location.replace('https://react-event-viewer-calendar-r34x4.ondigitalocean.app/')
    return null
  }
  const RedirectFlekin = () => {
    window.location.replace('https://flekin-7qyrt.ondigitalocean.app/')
    return null
  }
  const RedirectFinflexi = () => {
    window.location.replace('https://finflexi.vercel.app/')
    return null
  }

  return (
    <div className="App">
      <Provider store={store} >
        <Routes>
          <Route path="/" element={welcome} ></Route>
          <Route path="/finflexi" element={< RedirectFinflexi />} ></Route>
          <Route path="/flekin" element={< RedirectFlekin />} ></Route>
          <Route path="/react-event-viewer-calendar" element={< RedirectCalendar />} ></Route>
          <Route path="/*" element={<NotFound />} ></Route>
        </Routes>
      </Provider>
    </div>
  )
}

export default App
