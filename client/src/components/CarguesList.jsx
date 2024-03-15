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
      <div className="flex box-decoration bg-slate-500 justify-center py-4 text-white rounded-sm ">Cargues Informacion</div>
      <div className="flex box-decoration bg-slate-800 justify-between py-4  text-white rounded-sm ">
        <div>Cantidad Cajas</div>
        <div>Alto Caja</div>
        <div>Ancho Caja</div>
        <div>Largo Caja</div>
        <div>Alto Contenedor</div>
        <div>Ancho Contenedor</div>
        <div>Largo Contenedor</div>
      </div>
      {cargues &&
        cargues.map((cargue) => (
          <div className="" key={cargue.id}
            onClick={() =>
              navigate('/cargues/' + cargue.id)
            }
          >
            <div className="flex box-decoration bg-slate-800 justify-between py-4  text-white rounded-sm">
              <div>{cargue.cantidadCajas}</div>
              <div>{cargue.altoCaja}</div>
              <div>{cargue.anchoCaja}</div>
              <div>{cargue.largoCaja}</div>
              <div>{cargue.altoContenedor}</div>
              <div>{cargue.anchoContenedor}</div>
              <div>{cargue.largoContenedor}</div>
            </div>
          </div>
        ))}
    </div>
  );
}

