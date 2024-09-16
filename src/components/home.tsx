'use client'

import { Link } from 'react-router-dom'
import { MainContent } from './main-content'

export function Home() {
  return (
    <MainContent>
      <div>
        <h1 className='text-4xl font-bold mb-6 p-12 pb-0'>Mis DDJJ</h1>
        <div className=' xl:w-[1200px] ml-12 my-12'>
          <div className='flex justify-end'>
            <Link className='p-2 px-4  bg-black text-white text-center w-48 rounded-xl transition-all duration-200 border border-black hover:bg-white hover:text-black' to='/ddjj/new'>Nueva DDJJ</Link>
          </div>
        </div>
        <table className="table-auto border-collapse border border-gray-200 xl:w-[1200px] ml-12  bg-white">
          <thead className='py-3'>
            <tr>
              <th className='p-2 text-left'>Numero</th>
              <th className='p-2 text-left'>Estado</th>
              <th className='p-2 text-left'>Publicado</th>
              <th className='p-2 text-left'>Acciones</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-2 border-b'>1</td>
                <td className='p-2 border-b'>Publicado</td>
                <td className='p-2 border-b'>2023-01-01</td>
                <td className='p-2 border-b'>Ver</td>
              </tr>
              <tr>
                <td className='p-2 border-b'>2</td>
                <td className='p-2 border-b'>Publicado</td>
                <td className='p-2 border-b'>2023-01-01</td>
                <td className='p-2 border-b'>Ver</td>
              </tr>
            </tbody>
        </table>
      </div>
    </MainContent>
  )
}