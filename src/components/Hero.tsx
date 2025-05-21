import React from 'react'
import './styles/hero.scss'

type HeroProps = {
    titulo: String;
    descricao: String;
    buttonText: String;
}

const Hero: React.FC<HeroProps> = ({ titulo, descricao, buttonText }) => {
  return (
    <section className="hero">
        <div className='content'>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
            <button className='btn'>{buttonText}</button>
        </div>
    </section>
  )
}

export default Hero
