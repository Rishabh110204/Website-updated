import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Portfolio from "./pages/Portfolio";
import Login from "./pages/Login";
import { AuthProvider, useAuth } from "./firebase/AuthContext";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <NavBar />
              </ProtectedRoute>
            } />
            {/* Add more protected routes here as needed */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
