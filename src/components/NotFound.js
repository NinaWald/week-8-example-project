import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const onHomeButtonClick = () => {
    navigate('/');
  }
  return (
    <div>
      <p>Sorry Pokemon Master, no such page</p>
      <button type="button" onClick={onHomeButtonClick}>Return to home page</button>
    </div>
  )
};