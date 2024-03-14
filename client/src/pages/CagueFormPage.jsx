import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import {createCargues, deleteCargue, updateCargue, getCargue} from '../api/cargues.api.js'
import {useNavigate, useParams} from 'react-router-dom'
import { toast } from 'react-hot-toast'


export function CargueFormPage(){
    
    const {
        register, 
        handleSubmit, 
        formState: {errors}, setValue 
    } = useForm();

    const navigate = useNavigate()
    const params = useParams();

    const onSubmit = handleSubmit(async data => {
        if(params.id){
            await updateCargue(params.id, data);
            toast.success('Se editado un Cargue', {
                position: 'top-right'
            })
        } else {
            await createCargues(data);
            toast.success('Se ha creado un nuevo Cargue', {
                position: 'top-right'
            })
        }
        navigate('/cargues')
    })

    useEffect(() => {
        async function loadCargue(){
        if(params.id){
            const {data} = await getCargue(params.id);
            setValue('cantidadCajas', data.cantidadCajas)
            setValue('altoCaja', data.altoCaja)
            setValue('anchoCaja', data.anchoCaja)
            setValue('largoCaja', data.largoCaja)
            setValue('altoContenedor', data.altoContenedor)
            setValue('anchoContenedor', data.anchoContenedor)
            setValue('largoContenedor', data.largoContenedor)

            }
        }
        loadCargue();
    }, [])
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="int" placeholder="cantidad de cajas" {...register('cantidadCajas', {required: true})}/>
                    {errors.cantidadCajas && <span>Este es campo es requerido</span>}

                <input type="int" placeholder="alto de la caja" {...register('altoCaja', {required: true})}/>
                    {errors.altoCaja && <span>Este es campo es requerido</span>}

                <input type="int" placeholder="ancho de la caja" {...register('anchoCaja', {required: true})}/>
                    {errors.anchoCaja && <span>Este es campo es requerido</span>}

                <input type="int" placeholder="largo de la caja" {...register('largoCaja', {required: true})}/>
                    {errors.largoCaja && <span>Este es campo es requerido</span>}   

                <input type="int" placeholder="alto del contenedor" {...register('altoContenedor', {required: true})}/>
                    {errors.altoContenedor && <span>Este es campo es requerido</span>}

                <input type="int" placeholder="ancho del contenedor" {...register('anchoContenedor', {required: true})}/>
                    {errors.anchoContenedor && <span>Este es campo es requerido</span>}

                <input type="int" placeholder="largo del contenedor" {...register('largoContenedor', {required: true})}/>
                    {errors.largoContenedor && <span>Este es campo es requerido</span>}
                
                <button>Guardar</button>
            </form>

            {params.id && <button
                onClick={async () =>{
                const accepted = window.confirm('Estas seguro de eliminar el cargue?');
                if(accepted){
                   await deleteCargue(params.id);
                   toast.success('Se ha eliminado un Cargue', {
                    position: 'top-right'
                })
                   navigate('/cargues');
                }   
            }}
            >Delete</button>}
        </div>
    )
}

