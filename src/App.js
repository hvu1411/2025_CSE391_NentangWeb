import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <main style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Hello React</h2>
      </main>
      <Footer />
    </div>
  );
};

export default App;