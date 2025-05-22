import React from 'react'
import Layout from '../containers/Layout'
import Hero from '../components/Hero'
import '../components/styles/Main.scss'


const Home: React.FC = () => {

  return (
    <Layout>
      <Hero 
      titulo= "Cadastre seu pet"
      descricao= "Adicione informações sobre seu pet"
      buttonText= "Cadastrar Pet"
      />
    </Layout>
  )
}
    
export default Home