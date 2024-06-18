import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

import ToDos from './components/Todo';  
import CreateToDo from './components/CreatTodo';




function App() {

  return (
    <div className='container '>
      <div className='row'>
        <div className='col-lg-6 mx-auto my-5'>
        <CreateToDo />
        <ToDos />
        </div>
      </div>

    </div>
  )
}

export default App
