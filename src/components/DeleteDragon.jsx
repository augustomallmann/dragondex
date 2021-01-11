import React from "react";
import { Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs";
import axios from "axios";

export default function DeleteDragon({ dragon, dragons, setDragons }) {
  function handleDeleteDragon() {
    axios.delete(
      `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`
    );
    const dragonsStillActive = dragons.filter((d) => d.id !== dragon.id);
    setDragons(dragonsStillActive);
  }

  return (
    <div>
      <Button
        type="button"
        variant="danger"
        onClick={() => handleDeleteDragon()}
      >
        <BsTrash />
      </Button>
    </div>
  );
}
