import { useEffect, useState } from "react"
import {getAllCargues} from '../api/cargues.api.js'
import {useNavigate} from 'react-router-dom'

export function CarguesList() {
    const [cargues, setCargues] = useState();
  
    useEffect(() => {
      async function loadCargues() {
        const respuesta = await getAllCargues();
        setCargues(respuesta.data);
      }
      loadCargues();
    }, []);

    const navigate = useNavigate();
    
  
    return (
      <div>
        {cargues &&
          cargues.map((cargue) => (
            <div key={cargue.id}
              onClick={() =>
                navigate('/cargues/' + cargue.id)
              }
            >
              <h3>Informacion del cargue:</h3>
              <p>Cantidad de cajas:  {cargue.cantidadCajas}</p>
              <p>Alto de la caja{cargue.altoCaja}</p>
              <p>Ancho de la caja{cargue.anchoCaja}</p>
              <p>Largo de la caja{cargue.largoCaja}</p>
              <p>Alto del contenedor {cargue.altoContenedor}</p>
              <p>Ancho del contenedor{cargue.anchoContenedor}</p>
              <p>Largo del contenedor {cargue.largoContenedor}</p>
              <hr/>
            </div>
          ))}
      </div>
    );
  }

