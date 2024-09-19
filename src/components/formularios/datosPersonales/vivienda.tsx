"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Component() {
  const [hasHousing, setHasHousing] = useState(false)
  const [isRenting, setIsRenting] = useState(false)

  return (
    <Card className="w-full rounded-none mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-normal">Vivienda</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <Label htmlFor="has-housing" className="text-base font-normal">
            Posee vivienda que solucione sus necesidades de vivienda
          </Label>
          <Switch
            id="has-housing"
            checked={hasHousing}
            onCheckedChange={setHasHousing}
          />
        </div>

        <div>
          <Label htmlFor="garrison" className="text-base font-normal mb-2 block">
            ¿Cuál es la guarnición militar más cercana a su vivienda propia?
          </Label>
          <Select>
            <SelectTrigger id="garrison">
              <SelectValue placeholder="Campo de Mayo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="campo-de-mayo">Campo de Mayo</SelectItem>
              {/* Add more options as needed */}
            </SelectContent>
          </Select>
        </div>

        {hasHousing && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dirección de la vivienda propia</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="country">País</Label>
                <Select>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="argentina">Argentina</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="province">Provincia</Label>
                <Select>
                  <SelectTrigger id="province">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buenos-aires">Buenos Aires</SelectItem>
                    {/* Add more provinces as needed */}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="locality">Localidad</Label>
                <Select>
                  <SelectTrigger id="locality">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="caba">CABA</SelectItem>
                    {/* Add more localities as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-2">
                <Label htmlFor="street">Calle</Label>
                <Input id="street" placeholder="Add text" />
              </div>
              <div>
                <Label htmlFor="altura">Altura</Label>
                <Input id="altura" placeholder="Add text" />
              </div>
              <div>
                <Label htmlFor="piso">Piso</Label>
                <Input id="piso" placeholder="Add text" />
              </div>
              <div>
                <Label htmlFor="dpto">Dpto</Label>
                <Input id="dpto" placeholder="Add text" />
              </div>
            </div>
            <div>
              <Label htmlFor="postal-code">Código Postal</Label>
              <Input id="postal-code" placeholder="Add text" className="max-w-[200px]" />
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <Label htmlFor="is-renting" className="text-base font-normal">
            ¿Alquila una vivienda actualmente?
          </Label>
          <Switch
            id="is-renting"
            checked={isRenting}
            onCheckedChange={setIsRenting}
          />
        </div>

        {isRenting && (
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="desde">Desde</Label>
              <Input id="desde" type="date" placeholder="dd/mm/aaaa" />
            </div>
            <div>
              <Label htmlFor="hasta">Hasta</Label>
              <Input id="hasta" type="date" placeholder="dd/mm/aaaa" />
            </div>
          </div>
        )}

        <div className="bg-yellow-100 p-4 rounded-md">
          <p className="text-sm">
            Los bloques en <strong>GRIS</strong> solo son visibles si las opciones elegidas son <strong>SI</strong>
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="secondary">Siguiente</Button>
        <Button>Guardar</Button>
      </CardFooter>
    </Card>
  )
}