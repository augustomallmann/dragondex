/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Form, Button, Alert, Toast } from "react-bootstrap";
import Hero from "../../components/Hero";
import useInput from "../../hooks/useInput";

export default function EditDragonPage({ match }) {
  const [dragon, setDragon] = useState([]);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  const [loading, setLoading] = useState(false);
  const { value: name, bind: bindName, reset: resetBindName } = useInput("");
  const { value: type, bind: bindType, reset: resetBindType } = useInput("");
  const {
    params: { id },
  } = match;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
      .then((response) => {
        const singleDragon = response.data;
        setDragon(singleDragon);
      });
    setLoading(false);
  }, []);

  const handleEditDragon = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .put(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`, {
        name,
        type,
      })
      .then((response) => {
        const { dragonName = name, dragonType = type } = response.data;
        const newDragon = { name: dragonName, type: dragonType };
        setShow(true);
        setDragon(newDragon);
      })
      .catch(() => {
        setError("Ocorreu um erro, tente novamente mais tarde");
      });
    setLoading(false);
    resetBindName();
    resetBindType();
  };
  return (
    <div>
      <Hero colSize="12" single fullHeight>
        <div style={{ maxWidth: "500px" }} className="m-auto py-3">
          <p>Você está editando o seguinte dragão:</p>
          <h2>Nome: {dragon.name}</h2>
          <h2>Tipo: {dragon.type}</h2>
        </div>
        <Card style={{ maxWidth: "500px" }} className="m-auto">
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}

            <Card.Text>
              <Form>
                <Form.Text as="p">
                  Cuidado, uma vez feito, não será possível voltar atrás.
                </Form.Text>

                <Form.Group>
                  <Form.Label>Altere o nome do Dragão:</Form.Label>

                  <Form.Control
                    id="name"
                    type="text"
                    placeholder={dragon.name}
                    {...bindName}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Altere o tipo do Dragão:</Form.Label>

                  <Form.Control
                    id="type"
                    type="text"
                    required
                    placeholder={dragon.type}
                    {...bindType}
                  />
                </Form.Group>
                <Button
                  variant="warning"
                  disabled={loading}
                  onClick={handleEditDragon}
                >
                  Alterar
                </Button>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Hero>

      <div
        style={{
          position: "absolute",
          bottom: 100,
          right: 20,
        }}
      >
        <Toast
          show={show}
          delay={3000}
          autohide
          onClose={() => toggleShow(false)}
        >
          <Toast.Header>
            <strong className="mr-auto">DragonDex</strong>
          </Toast.Header>
          <Toast.Body>Dragão alterado com sucesso</Toast.Body>
        </Toast>
      </div>
    </div>
  );
}
