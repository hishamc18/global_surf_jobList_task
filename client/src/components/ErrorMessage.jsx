import React from 'react';

const ErrorMessage = ({ message }) => (
  message ? <p className="text-red-500 text-sm mt-1">{message}</p> : null
);

export default ErrorMessage;