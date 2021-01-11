import React from "react";
import CreateDragon from "../../components/CreateDragon";
import Hero from "../../components/Hero";

export default function CreateDragonPage() {
  return (
    <div>
      <Hero
        bgDark
        fullHeight
        headerOne="Capturou um novo dragão?"
        descriptionText="Não deixe ele passar despercebido, faça o registro agora. "
        descriptionTextTwo="Após o cadastro, você será redirecionado automaticamente para a página do seu dragão."
      >
        <CreateDragon />
      </Hero>
    </div>
  );
}
