import { ROUTES } from '@/app/router/routes';
import { signUp } from '@/entities/user';
import { useAppDispatch } from '@/shared/hooks/reduxHooks';
// import { useAppDispatch } from '@/shared/hooks/reduxHooks';
import { unwrapResult } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SignUpForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(
        signUp({ username, email, password })
      );
      unwrapResult(resultAction);
      navigate(ROUTES.HOME);
    } catch (error) {
      console.error('Sign up failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type='submit'>Sign Up</button>
    </form>
  );
};


