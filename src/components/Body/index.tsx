import React from 'react'
import BlockText from '../BlockText'
import style from './Body.module.sass'
import Figure from '../../assets/img/фигура.png'

const index: React.FC = () => {
  return (
    <section className={style.main}>
      <div className={style.container}>
        <div className={style.left}>
          <h1>Путешествие</h1>
          <h3>на красную планету</h3>
          <div className={style.btn}>
            <button>Начать путешствие</button>
            <img src={Figure} alt="figure" />
          </div>
        </div>
        <div className={style.right}>
          <BlockText topTextProps="мы" countProps="1" bottomTextProps="на рынке"/>
          <BlockText topTextProps="гарантируем" countProps="50%" bottomTextProps="безопасность"/>
          <BlockText topTextProps="календарик за" countProps="2001г" bottomTextProps="в подарок"/>
          <BlockText topTextProps="путешствие" countProps="597" bottomTextProps="дней"/>
        </div>
      </div>
    </section>
  )
}

export default index