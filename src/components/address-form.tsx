'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Select } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function AddressForm() {
  const [hasAssignedHousing, setHasAssignedHousing] = useState(false)

  return (
    <div className="flex-1 p-8 bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-6">Domicilio</h2>
      <form className="space-y-6">
        <div className="flex items-center space-x-2">
          <label htmlFor="assigned-housing">¿Tiene asignada una vivienda de la Fuerza?</label>
          <Switch
            id="assigned-housing"
            checked={hasAssignedHousing}
            onCheckedChange={setHasAssignedHousing}
          />
        </div>

        <div>
          <label htmlFor="bbmm" className="block mb-2">BBMM</label>
          <Select id="bbmm">
            <option value="belgrano">Belgrano</option>
            {/* Add more options as needed */}
          </Select>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="pais" className="block mb-2">País</label>
            <Select id="pais">
              {/* Add country options */}
            </Select>
          </div>
          <div>
            <label htmlFor="provincia" className="block mb-2">Provincia</label>
            <Select id="provincia">
              {/* Add province options */}
            </Select>
          </div>
          <div>
            <label htmlFor="localidad" className="block mb-2">Localidad</label>
            <Select id="localidad">
              {/* Add locality options */}
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <label htmlFor="calle" className="block mb-2">Calle</label>
            <Input id="calle" placeholder="Add text" />
          </div>
          <div>
            <label htmlFor="altura" className="block mb-2">Altura</label>
            <Input id="altura" placeholder="Add text" />
          </div>
          <div>
            <label htmlFor="piso" className="block mb-2">Piso</label>
            <Input id="piso" placeholder="Add text" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="dpto" className="block mb-2">Dpto</label>
            <Input id="dpto" placeholder="Add text" />
          </div>
          <div>
            <label htmlFor="codigo-postal" className="block mb-2">Código Postal</label>
            <Input id="codigo-postal" placeholder="Add text" />
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <Button variant="secondary">Siguiente</Button>
          <Button>Guardar</Button>
        </div>
      </form>
    </div>
  )
}