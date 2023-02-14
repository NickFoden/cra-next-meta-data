import React from 'react';
import './App.css';

//@ts-expect-error
const NextApp = React.lazy(() => import('../next-app/.next/server/pages/index.html'));

function App() {
  return (
    <>
    <NextApp />
    </>
  );
}

export default App;
