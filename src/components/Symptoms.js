import React from "react";
import styles from "./Symptoms.module.css";

const icons = [
  {
    name: "Feridas persistentes",
    imgSrc: "/images/sintomas/feridasPersistentes.jpg",
  },
  {
    name: "Manchas vermelhas ou brancas",
    imgSrc: "/images/sintomas/manchasVermelhas.jpg",
  },
  {
    name: "Inchaço ou nódulos",
    imgSrc: "/images/sintomas/inchaco.jpg",
  },
  {
    name: "Dificuldade para comer ou mastigar",
    imgSrc: "/images/sintomas/dificuldadeComer.jpg",
  },
  {
    name: "Dores persistentes",
    imgSrc: "/images/sintomas/dorPersistente.jpg",
  },
  {
    name: "Perda de peso inexplicada",
    imgSrc: "/images/sintomas/perdaPeso.jpg",
  },
];

const Card = ({ imgSrc, name }) => (
  <li className={styles.liStyle}>
    <div className={styles.cards}>
      <img src={imgSrc} alt={name} className={styles.icons} />
    </div>
    <p className={styles.title}>{name}</p>
  </li>
);

const Symptoms = () => {

  return (
    <section className={styles.sectionCard}>
      <h1 className={styles.cardTitle}>SINAIS E SINTOMAS </h1>
      <div>
        <ul className={styles.ulStyle}>
          {icons.map((icon, index) => (
            <Card
              key={index}
              imgSrc={icon.imgSrc}
              name={icon.name}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Symptoms;
