import { Routes, Route } from 'react-router-dom'
import { UseStateComponent } from '../components/useStateComponent'
import { Home } from '../components/Home'
import { UseEffectComponent } from '../components/useEffectComponent'
import { UseReducerComponent } from '../components/useReducer'
import { UseContextComponent } from '../components/useContextComponent'
import { UseCallbackComponent } from '../components/useCallbackComponent'
import { GraficoRechart } from '../components/GraficoRechart'
import {ClockComponent } from '../components/ClockComponentk'
import { CalendarComponent } from '../components/CalendarComponent'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/usestate" element={<UseStateComponent />} />
      <Route path="/useeffect" element={<UseEffectComponent />} />
      <Route path="/useeffect" element={<UseEffectComponent />} />
      <Route path="/usereducer" element={<UseReducerComponent />} />
      <Route path="/usecontext" element={<UseContextComponent />} />
      <Route path="/usecallback" element={<UseCallbackComponent />} />
      <Route path="/graficorechart" element={<GraficoRechart />} />
      <Route path="/clock" element={<ClockComponent />} />
      <Route path="/calendar" element={<CalendarComponent />} />
    </Routes>
  )
}

export default AppRoutes