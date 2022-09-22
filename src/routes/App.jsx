import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { Layout } from '../containers/Layout'
import { Home } from "../pages/Home"
import { NotFound } from '../pages/NotFound'


export const App = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
               <Route path='/' element={<Home/>}/> 
               <Route exact path='/:category' element={<Home/>}/> 
               <Route path='*' element={<NotFound/>}/> 
            </Routes>
        </Layout>
    </BrowserRouter>
   
  )
}
