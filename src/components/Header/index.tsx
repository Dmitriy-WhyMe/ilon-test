import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.sass'
import Logo from '../../assets/img/лого.png'

type Navbar = {
	title: string,
	linkUrl: string
}

const Index: React.FC = () => {
	const navbar: Navbar[] = [
        {
            title: "Главная",
            linkUrl: "/"
        },
        {
            title: "Технология",
            linkUrl: ""
        },
        {
            title: "График полетов",
            linkUrl: ""
        },
        {
            title: "Гарантии",
            linkUrl: ""
        },
		{
            title: "О компании",
            linkUrl: ""
        },
		{
            title: "Контакты",
            linkUrl: ""
        }
    ]
	return (
		<header className={style.row}>
			<div className={style.container}>
                <div className={style.logoWrap}>
                    <Link to='/' >
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <input type="checkbox" className={style.menuBar} id="menu-bar"/>
                <label htmlFor="menu-bar" className={style.menuIcon} />
				<ul className={style.menu}>
					{
						navbar.map(
							( obj,index ) => 
								<li key={index}>
									<Link to={obj.linkUrl}>{obj.title}</Link>
								</li>
						)
					}
				</ul>
            </div>
		</header>
	)
}

export default Index