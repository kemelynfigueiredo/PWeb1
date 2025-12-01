import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Carrossel from './Carrossel.jsx';
import dadosFiltrados from '../datasets/dados_filtrados.json';
import './Main.css';

const Main = () => {
  let ranking = [...dadosFiltrados]
    .sort((a, b) => b.qt_mat_bas - a.qt_mat_bas)
    .slice(0, 3);

  return (
    <main>
      <Carrossel />
      {/* Cartões da IE */}
      <Container>
        <h3 className="my-4 text-center">Os 3 Melhores do Censo 2024</h3>
        <Row>
          {ranking.map((escola) => {
            let fotoEscola = {
              25133500:
                'https://lh3.googleusercontent.com/p/AF1QipPKqi-9cfBDa3fF1SKCltDyUHyZyU1nGGFs-Nrd=s680-w680-h510',

              25096850:
                'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSx9Xuk32niEYwx3RSlll8YOTSjejyhIfd97bQeq5-YmFMKY_z38-ND3f2LXzgprGFjq3HoCXKTTVlesab21Uy_5ShX6CrgjKdR2WX7feWf-2D5nfaGdM3d5v10BMlbfp1nn83PJbQ=s680-w680-h510',

              25139401:
                'https://www.blogdobgpb.com.br/wp-content/uploads/2022/05/images-4.jpeg',
            };
            let imagemEscola = fotoEscola[escola.co_entidade];

            return (
              <Col className="mb-4">
                <Card>
                  <div className="card-img-wrapper">
                    <Card.Img variant="top" src={imagemEscola} className="card-img-fixed"/>
                  </div>
                  <Card.Body>
                    <Card.Title>{escola.no_entidade}</Card.Title>
                    <Card.Text>
                      <strong>Município:</strong> {escola.no_municipio} <br />
                      <strong>Matrículas:</strong> {escola.qt_mat_bas}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
};

export default Main;
