import React from 'react'
import Layout from '../containers/Layout'
import Hero from '../components/Hero'
import '../components/styles/navbar.scss'
import '../components/styles/hero.scss'


const Index: React.FC = () => {

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
    
export default Index