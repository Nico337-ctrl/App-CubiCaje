import {Link} from 'react-router-dom'


export function Navigation(){
    return(
        <div className='flex justify-between py-3'>
            <Link to='/cargues'>
                <p className='font-bold text-3xl m-4'>Inicio</p>
            </Link>
            <button>
                <Link className='bg-indigo-500 px-3 py-4 rounded-lg' to='/cargues-create'>Crear Cargue</Link>
            </button>
        </div>
    )
}

