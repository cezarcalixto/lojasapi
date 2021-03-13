import React from 'react'
import './App.css';
import Lojas from './Lojas';

function App() {

  const [dados, setDados] = React.useState(null)

  async function handleClic (event) {
    const response = await fetch('https://localhost:44344/apiloja')
    const json = await response.json();
    setDados(json)
  }
  return (
    <div style={{center:'block'}} className="App col-12 container">
      <div className="card col-12" style={{width: '30rem', marginTop:'40px', marginBottom:'40px'}}>
      {dados && <Lojas className='col-12' dados={dados} />}
      <div className="card-body">
      <h5 className="card-title">Histórico</h5>
      <p className="card-text">Dados de empresas</p>
      <button className="botao btn btn-dark" onClick={handleClic}>Buscar</button>
    </div>
    </div>
      
      
      
    </div>
  );
}

export default App;
