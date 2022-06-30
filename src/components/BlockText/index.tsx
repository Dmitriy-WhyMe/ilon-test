import React from 'react'
import style from './BlockText.module.sass'

type BlockText = {
    topTextProps: string,
    countProps: string,
    bottomTextProps: string
}

const index: React.FC<BlockText> = ({topTextProps, countProps, bottomTextProps}) => {
  return (
    <div className={style.block}>
        <div className={style.text}>
            <div className={style.topText}>{topTextProps}</div>
            <div className={style.count}>{countProps}</div>
            <div className={style.bottomText}>{bottomTextProps}</div>
        </div>
    </div>
  )
}

export default index