import { useEffect, useState } from "react"
import { getAllCargues } from '../api/cargues.api.js'
import { useNavigate } from 'react-router-dom'

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
          <table className="border-collapse border border-slate-500 " key={cargue.id}
            onClick={() =>
              navigate('/cargues/' + cargue.id)
            }
          >
            <thead>
              <tr>Cargue</tr>
              <tr>Informacion del cargue:</tr>
            </thead>
            <tbody>
              <tr>Cantidad de cajas:
                <th className="border border-slate-600">{cargue.cantidadCajas}</th> 
              </tr>
              <tr>Alto de la caja
                <th className="border border-slate-600">{cargue.altoCaja}</th>
              </tr>
              <tr>Ancho de la caja
                <th className="border border-slate-600">{cargue.anchoCaja}</th>
              </tr>
              <tr>Largo de la caja
                <th className="border border-slate-600">{cargue.largoCaja}</th>
              </tr>
              <tr>Alto del contenedor
                <th className="border border-slate-600">{cargue.altoContenedor}</th>
              </tr>
              <tr>Ancho del contenedor
                <th className="border border-slate-600">{cargue.anchoContenedor}</th>
              </tr>
              <tr>Largo del contenedor
                <th className="border border-slate-600">{cargue.largoContenedor}</th>
              </tr>
            </tbody>
          </table>
        ))}
    </div>
  );
}

