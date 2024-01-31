import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import Categoria from '../../../models/Categoria'
import { buscar, deletar } from '../../../services/Service'


function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
         console.log("Categorias")
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error) {
                alert('Erro ao deletar')
            }
        }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    



    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`)

            alert('Categoria apagada com sucesso')

        } catch (error) {
            alert('Erro ao apagar o categoria')
        }

        retornar()
    }
    return (
    
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center  my-4'>Deletar Categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar essa categoria?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-black text-yellow-500 font-bold text-2xl'>Categoria</header>
                <p className='p-8 text-3xl bg-zinc-200 h-full'>{categoria.nome}</p>             
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='text-zinc-700 hover:bg-yellow-300 bg-yellow-500  w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-yellow-500 bg-zinc-700 hover:bg-zinc-300 flex items-center justify-center' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria