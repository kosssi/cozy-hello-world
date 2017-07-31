import React from 'react'

import Sidebar from './Sidebar'
import AppRoutes from './AppRoutes'

const App = ({ children }) => (
  <div className='hello-wrapper coz-sticky'>
    <Sidebar />
    <main className='hello-content'>
      <AppRoutes />
    </main>
  </div>
)

export default App
