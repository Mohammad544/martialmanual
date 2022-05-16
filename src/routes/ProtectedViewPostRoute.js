import React from 'react'
import { Navigate} from 'react-router-dom'
import { useAuth } from '../contexts/Auth'

function ProtectedViewPostRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" replace />;
}

export default ProtectedViewPostRoute;