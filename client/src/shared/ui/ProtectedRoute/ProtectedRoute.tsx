import { useAppSelector } from '@/shared/hooks/reduxHooks';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Loader from '../Loader/Loader';

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const { user, loading } = useAppSelector((state) => state.user);

  if (loading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate to='/signin' />;
  }
  return children;
};

