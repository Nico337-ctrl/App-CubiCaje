import {Link} from 'react-router-dom'


export function Navigation(){
    return(
        <div>
            <Link to='/cargues'>
                <h1>Inicio</h1>
            </Link>
            <Link to='/cargues-create'>Crear Cargue</Link>
        </div>
    )
}

