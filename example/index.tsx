import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useHello } from '../.';

const App = () => {
  const greeting = useHello({ name: 'Dries' });

  return (
    <>
      <h1>{greeting}</h1>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
