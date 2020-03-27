import React, {useState} from 'react';
import Header from './Header'

// JSX (JavaScript & XML)

function App() {
  let [counter, setCounter] = useState(0);

  // Array [valor, funcaoDeAtualizacao]

  function increment() {
    setCounter(counter + 1);
  }

  return (
    //<Header title="Semana Omnistack" />
    <div>
      <Header> Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;
