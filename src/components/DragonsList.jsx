import React from "react";
import moment from "moment";
import {
  Card,
  Badge,
  Container,
  Row,
  Col,
  Alert,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import DeleteDragon from "./DeleteDragon";

const NoDragonsFound = () => (
  <Alert variant="danger">
    Você não possuí nenhum dragão cadastrado.
    <Link to="/cadastrar-dragoes">Clique aqui</Link> para fazer seu primeiro
    registro.
  </Alert>
);

export default function DragonsList({ dragons, setDragons, loading }) {
  return (
    <div>
      <Container className="py-5">
        <h1>Meus Dragões ({dragons.length}) </h1>
        {!loading && dragons.length === 0 ? <NoDragonsFound /> : ""}
        <div className="text-center">
          {loading ? <Spinner animation="border" /> : ""}
        </div>
        <Row>
          {dragons.map((dragon) => (
            <Col lg="3" className="my-3" key={dragon.id}>
              <Card>
                <Card.Body>
                  <Link to={`/dragoes/${dragon.id}`}>
                    <Card.Title>{dragon.name}</Card.Title>
                  </Link>

                  <Badge pill variant="dark">
                    {dragon.type}
                  </Badge>
                  <Card.Text>
                    Criado em {moment(dragon.createdAt).format("LLL")}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <DeleteDragon
                      dragon={dragon}
                      dragons={dragons}
                      setDragons={setDragons}
                    />
                    <Link to={`/dragoes/${dragon.id}/editar`} className="btn">
                      <FiEdit2 />
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
