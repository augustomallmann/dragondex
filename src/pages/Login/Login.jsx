import React from "react";
import LoginForm from "../../components/LoginForm";
import Hero from "../../components/Hero";

export default function Login() {
  return (
    <div>
      <Hero
        bgDark
        fullHeight
        headerOne="Capturou um novo dragão em sua jornada?"
        descriptionText="Nossa empresa surgiu para que você consiga organizar sua coleção de dragões de forma rápida"
      >
        <LoginForm />
      </Hero>
    </div>
  );
}
