import { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Carrossel from './Carrossel.jsx';
import dadosFiltrados from '../datasets/dados_filtrados.json';
import './Main.css';
import InstituicoesRankingCard from './InstituicoesRankingCard.jsx';

const Main = () => {
  let ranking = [...dadosFiltrados]
    .sort((a, b) => b.qt_mat_bas - a.qt_mat_bas)
    .slice(0, 3);

  const [incremento, setIncremento] = useState(0);

  let incrementarHandleClick = () => {
    setIncremento(incremento + 1);
    console.log('clicou no botão!' + incremento);
  };

  return (
    <main>
      <Carrossel />
      {/* Cartões da IE */}
      <InstituicoesRankingCard instituicoesEnsino={ranking} />

      <Container className="text-center my-4">
        <h3>Contador: {incremento}</h3>
        <Button onClick={incrementarHandleClick}>Incrementar</Button>
      </Container>
    </main>
  );
};

export default Main;
