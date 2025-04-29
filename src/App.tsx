import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/auth/Login"
import Welcome from "./pages/auth/Welcome"
import Register from "./pages/auth/Register"

// Dashboard
import Layout from "./pages/dashboard/Layout"
import Dashboard from "./pages/dashboard/Dashboard"
import Admin from "./pages/dashboard/admin/Index"
import Alumni from "./pages/dashboard/alumni/Index"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={< Dashboard />} />
          <Route path="/dashboard/admin" element={< Admin />} />
          <Route path="/dashboard/alumni" element={< Alumni />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
