import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Hero from "../../components/Hero";

export default function SingleDragonPage({ match }) {
  const [dragon, setDragon] = useState([]);

  const {
    params: { id },
  } = match;

  useEffect(() => {
    axios
      .get(`http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${id}`)
      .then((response) => {
        const singleDragon = response.data;
        setDragon(singleDragon);
      });
  }, []);

  return (
    <Hero
      colSize="12"
      fullHeight
      descriptionText="Aqui você pode ver, editar ou deletar seu dragão"
      descriptionTextTwo="Cuidado, não será possível voltar atrás!"
    >
      <Card style={{ maxWidth: "300px" }} className="m-auto">
        <Card.Body>
          <Card.Title>Nome: {dragon.name}</Card.Title>
          <Card.Text>
            <p>ID: {dragon.id}</p>
            <p>Type: {dragon.type}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Hero>
  );
}
