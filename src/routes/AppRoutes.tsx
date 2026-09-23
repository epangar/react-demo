import { Routes, Route } from 'react-router-dom'
import { UseStateComponent } from '../components/useStateComponent'
import { Home } from '../components/Home'
import { UseEffectComponent } from '../components/useEffectComponent'
import { UseReducerComponent } from '../components/useReducer'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usestate" element={<UseStateComponent />} />
      <Route path="/useeffect" element={<UseEffectComponent />} />
      <Route path="/useeffect" element={<UseEffectComponent />} />
      <Route path="/usereducer" element={<UseReducerComponent />} />
    </Routes>
  )
}

export default AppRoutes