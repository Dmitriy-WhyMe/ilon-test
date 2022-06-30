import React from 'react'
import Header from '../components/Header'
import Body from '../components/Body'
import bg from '../assets/img/фон.png'

const Home: React.FC = () => {
  return (
    <section className="main">
        <img src={bg} alt="bg" className='main__bg'/>
        <Header />
        <Body />
    </section>
  )
}

export default Home