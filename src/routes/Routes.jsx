import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { Login } from '../pages/Login/Login'
import { Perfil } from '../pages/Perfil/Perfil'
import { Todo } from '../pages/Todo/Todo'

export const Routes = () => {
    return (
        <ReactDomRoutes>
            <Route path='/' element={<Todo/>}/>
            <Route path='perfil' element={<Perfil/>}/>
            <Route path='login' element={<Login/>}/>
        </ReactDomRoutes>
    )
}
