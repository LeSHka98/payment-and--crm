// libraries
import React from 'react';
import { useRouteError } from 'react-router-dom';

type Error = {
  message: string,
  statusText: string
};

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as Error).statusText || (error as Error).message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
