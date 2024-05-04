import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DetailsForm from './Details'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DetailsForm />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
