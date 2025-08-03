// 📁 frontend/App.tsx

// 1. Add Navigate to the import list
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/dashboard";
import { SharePage } from "./pages/SharePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 2. This line will now work correctly */}
        <Route path="/" element={<Navigate to="/signin" />} />
        
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/share/:shareLink" element={<SharePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;