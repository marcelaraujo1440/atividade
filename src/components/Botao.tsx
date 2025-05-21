// src/components/Botao.tsx
import React from "react"
import styles from "./Botao.module.scss"

type Props = {
  texto: string
}

const Botao = ({ texto }: Props) => {
  return <button className={styles.botao}>{texto}</button>
}

export default Botao