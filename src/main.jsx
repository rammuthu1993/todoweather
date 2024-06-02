import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Todolist from './Todolist.jsx'
import WeatherApp from './WeatherApp.jsx'
import QrCode from './QrCode.jsx'
import FormHandling from './FormHandling.jsx'
import { TodoWrapper } from './TodoWrapper.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <TodoWrapper/> */}
      <Todolist/>
      {/* <WeatherApp/>  */}
     {/* <QrCode/>   */}
    {/* <FormHandling/> */}
  </React.StrictMode>,
)
