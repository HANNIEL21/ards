import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/auth/Login"
import Welcome from "./pages/auth/Welcome"
import Register from "./pages/auth/Register"
import Verify from "./pages/auth/Verify"

// Dashboard
import Layout from "./pages/dashboard/Layout"
import Dashboard from "./pages/dashboard/Dashboard"
import Admin from "./pages/dashboard/admin/Index"
import Alumni from "./pages/dashboard/alumni/Index"
import Sor from "./pages/dashboard/sor/Index"
import CreateSor from "./pages/dashboard/sor/create"
import ViewSor from "./pages/dashboard/sor/view"
import Transcript from "./pages/dashboard/transcript/Index"
import CreatTranscript from "./pages/dashboard/transcript/create"
import ViewTranscript from "./pages/dashboard/transcript/view"
import Certificate from "./pages/dashboard/certificate/Index"
import CreateCertificate from "./pages/dashboard/certificate/create"
import ViewCertificate from "./pages/dashboard/certificate/view"
import Upload from "./pages/dashboard/upload/Index"
import Verification from "./pages/dashboard/verification/Index"
import Stamp from "./pages/dashboard/stamp/Index"

// USER
import User from "./pages/user/Root"
import Profile from "./pages/user/Profile"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="admin" element={<Admin />} />
          <Route path="alumni" element={<Alumni />} />

          {/* Statements of Result */}
          <Route path="statements" element={<Sor />} />
          <Route path="statements/create" element={<CreateSor />} />
          <Route path="statements/:id" element={<ViewSor />} />

          {/* Transcripts */}
          <Route path="transcripts" element={<Transcript />} />
          <Route path="transcripts/create" element={<CreatTranscript />} />
          <Route path="transcripts/:id" element={<ViewTranscript />} />

          {/* Certificates */}
          <Route path="certificates" element={<Certificate />} />
          <Route path="certificates/create" element={<CreateCertificate />} />
          <Route path="certificates/:id" element={<ViewCertificate />} />

          {/* Uploads / Generate */}
          <Route path="upload" element={<Upload />} />

          {/* Verification */}
          <Route path="verification" element={<Verification />} />

          {/* Stamp */}
          <Route path="stamp" element={<Stamp />} />
        </Route>

        <Route path="/user" element={<User />}>
          <Route index element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
