/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import axios from "axios";
import useInput from "../hooks/useInput";

export default function CreateDragon({ dragons, setDragons }) {
  const { value: name, bind: bindName, reset: resetBindName } = useInput("");
  const { value: type, bind: bindType, reset: resetBindType } = useInput("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setError] = useState("");
  const history = useHistory();

  function handleCreateDragon(event) {
    event.preventDefault();
    setLoading(true);
    axios
      .post("http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon", {
        name,
        type,
      })
      .then((response) => {
        const { id, dragonName = name, dragonType = type } = response.data;
        const newDragon = { id, name: dragonName, type: dragonType };
        history.push(`/dragoes/${id}`);
        setDragons([newDragon, ...dragons]);
      })
      .catch((error) => {
        setError(error);
      });
    setLoading(false);
    resetBindName();
    resetBindType();
  }
  return (
    <>
      <div
        style={{ backgroundColor: "#222831", color: "#fff" }}
        className="p-5"
      >
        {errorMessage ? <Alert variant="danger">{errorMessage}</Alert> : ""}
        <Form onSubmit={handleCreateDragon}>
          <Form.Group>
            <Form.Label>Qual o nome do seu dragão?</Form.Label>
            <Form.Control
              id="name"
              type="text"
              disabled={loading}
              required
              placeholder="Nome"
              {...bindName}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Defina o tipo do seu dragão</Form.Label>
            <Form.Control
              id="type"
              type="text"
              required
              disabled={loading}
              placeholder="Tipo"
              {...bindType}
            />
          </Form.Group>

          <Button
            className="d-block w-50 m-auto"
            variant="success"
            type="submit"
          >
            Criar
          </Button>
        </Form>
      </div>
    </>
  );
}
