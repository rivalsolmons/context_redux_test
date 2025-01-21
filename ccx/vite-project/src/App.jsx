import React, { createContext, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

// Redux Slice for Auth
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  reducers: {
    signup: (state, action) => {
      const newUser = action.payload;
      localStorage.setItem("user", JSON.stringify(newUser));
      state.user = newUser;
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const savedUser = JSON.parse(localStorage.getItem("user"));
      if (savedUser && savedUser.email === email && savedUser.password === password) {
        state.user = savedUser;
      } else {
        throw new Error("Invalid email or password");
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

const { signup, login, logout } = authSlice.actions;
const store = configureStore({ reducer: { auth: authSlice.reducer } });

// Auth Context and Provider
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const signupUser = (name, email, phone, password) => {
    dispatch(signup({ name, email, phone, password }));
  };

  const loginUser = (email, password) => {
    try {
      dispatch(login({ email, password }));
      return true;
    } catch (err) {
      return false;
    }
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <AuthContext.Provider value={{ user, signup: signupUser, login: loginUser, logout: logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

// Protected Route
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

// App Component
const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </Provider>
  );
};
export { useAuth };
export default App;
