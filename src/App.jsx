// eslint-disable-next-line no-unused-vars
import React from 'react'
import Resume from './components/Resume/Resume'
import { Route, Routes } from 'react-router-dom'
function App() {
      return (
            <div>
                  <Routes>
                        <Route path='/nitesh' element={<Resume />} />
                  </Routes>
            </div>
      )
}

export default App
