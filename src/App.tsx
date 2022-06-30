import Home from './pages/Home'
import { Routes,Route } from "react-router-dom";
import Loadable from 'react-loadable'
import './styles/fonts.css'
import './styles/app.sass'

const NotFound = Loadable({
    loader: () => import('./pages/NotFound'),
    loading: () => <div>Загрузка...</div>,
})

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='' element={<Home/>}/>
				<Route path='*' element={<NotFound />}/>
			</Routes>
		</div>
	);
}

export default App
