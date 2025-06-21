
import { useState } from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Protected from './components/Protected';

function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            isAuthenticated ? <Protected /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Login />} />
      </Routes>
  );
}

export default App;
