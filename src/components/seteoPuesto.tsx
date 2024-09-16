'use client'

import { MainContent } from './main-content'
import { Link } from 'react-router-dom'


export function SeteoPuesto() {

  const roles = [
    { dni: '43256548', name: 'juan carlos broki', role: 'S1 (por ejemplo)', unidad: 'U4562' },
    { dni: '43256512', name: 'juan sdfs sdfsdf', role: 'J. UN (por ejemplo)', unidad: 'U4568' },
  ]

  return (
    <MainContent>
      <div className='w-screen flex justify-center  p-4'>
        <table className="table-auto border-collapse border border-gray-200 w-full ">
          <thead className="text-left p-2 px-4 bg-gray-200 text-gray-600 font-semibold">
            <tr>
              <th className='px-2' >DNI</th>
              <th className='px-2' >Nombre</th>
              <th className='px-2' >Rol</th>
              <th className='px-2' >Unidad</th>
              <th className='px-2' >Ir</th>
            </tr>
          </thead>
          <tbody className='p-2'>
          {
            roles.map((role) => (
              <tr key={role.dni} className="text-left p-2 px-4 bg-white text-gray-800 font-semibold">
                <td className='p-2' >{role.dni}</td>
                <td className="p-2  ">{role.name}</td>
                <td className="p-2  ">{role.role}</td>
                <td className="p-2  ">{role.unidad}</td>
                <td><Link className='p-2 px-4  bg-black text-white text-center mx-auto' to={`/seteoPuesto/${role.dni}`}>Setear puesto</Link></td>
              </tr>
            ))
          }
          </tbody>
        </table>

        </div>
    </MainContent>
  )
}


