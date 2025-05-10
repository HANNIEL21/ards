import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";

import Login from "./pages/auth/Login";
import Welcome from "./pages/auth/Welcome";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";

// Dashboard
import Layout from "./pages/dashboard/Layout";
import Dashboard from "./pages/dashboard/Dashboard";
import Admin from "./pages/dashboard/admin/Index";
import Alumni from "./pages/dashboard/alumni/Index";
import Sor from "./pages/dashboard/sor/Index";
import CreateSor from "./pages/dashboard/sor/create";
import ViewSor from "./pages/dashboard/sor/view";
import Transcript from "./pages/dashboard/transcript/Index";
import CreatTranscript from "./pages/dashboard/transcript/create";
import ViewTranscript from "./pages/dashboard/transcript/view";
import Certificate from "./pages/dashboard/certificate/Index";
import CreateCertificate from "./pages/dashboard/certificate/create";
import ViewCertificate from "./pages/dashboard/certificate/view";
import Upload from "./pages/dashboard/upload/Index";
import Verification from "./pages/dashboard/verification/Index";
import Stamp from "./pages/dashboard/stamp/Index";

// USER
import User from "./pages/user/Root";
import Profile from "./pages/user/Profile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DocumentTypes from "./pages/dashboard/settings/document-types";
import PaymentGateways from "./pages/dashboard/settings/payment-gateways";
import DocumentRequests from "./pages/dashboard/document-requests/index";
import Payments from "./pages/dashboard/payments";
import AlumniDetails from "./pages/dashboard/alumni/alumni-details";
import DocumentRequestDetails from "./pages/dashboard/document-requests/details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />

            <Route
              path="document_requests/:status?"
              element={<DocumentRequests />}
            />
            <Route
              path="document_requests/:id/details"
              element={<DocumentRequestDetails />}
            />

            {/* Payments */}

            <Route path="payments/:status?" element={<Payments />} />

            {/* Users */}
            <Route path="users">
              <Route
                index
                element={<Navigate to="/dashboard/users/alumni" />}
              />
              <Route path="alumni" element={<Alumni />} />
              <Route path="admins" element={<Admin />} />
              <Route path="alumni/:id" element={<AlumniDetails />} />
            </Route>

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

            {/* Settings */}
            <Route path="settings">
              <Route path="document_types" element={<DocumentTypes />} />
              <Route path="payment_gateways" element={<PaymentGateways />} />
            </Route>
          </Route>

          <Route path="/user" element={<User />}>
            <Route index element={<Profile />} />
          </Route>
        </Routes>
      </Router>
      <Toaster richColors />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
