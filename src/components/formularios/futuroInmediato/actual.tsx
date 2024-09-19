"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Component() {
  const [cargo, setCargo] = useState("")
  const [isComision, setIsComision] = useState(false)

  return (
    <Card className="w-full rounded-none mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Destino Actual</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Label htmlFor="tiempo-guarnicion">Tiempo en guarnición:</Label>
                <Input id="tiempo-guarnicion" value="2" readOnly className="bg-gray-100" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>No vamos a solicitar tiempo en guarnición ni en destino, solo se lo vamos a mostrar sin posibilidad de edición</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div>
                <Label htmlFor="tiempo-destino">Tiempo en destino:</Label>
                <Input id="tiempo-destino" value="2" readOnly className="bg-gray-100" />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>No vamos a solicitar tiempo en guarnición ni en destino, solo se lo vamos a mostrar sin posibilidad de edición</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div>
          <Label htmlFor="cargo">Cargo que ocupa</Label>
          <Select value={cargo} onValueChange={setCargo}>
            <SelectTrigger id="cargo">
              <SelectValue placeholder="Seleccionar cargo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cargo1">Cargo 1</SelectItem>
              <SelectItem value="cargo2">Cargo 2</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
          {cargo === "otro" && (
            <Input 
              className="mt-2" 
              placeholder="Ingrese su cargo" 
              onChange={(e) => setCargo(e.target.value)}
            />
          )}
          <p className="text-sm text-muted-foreground mt-1">
            La lista de cargos que ocupan es tipificada. Y sino existe permite que el usuario ingrese su cargo de forma libre
          </p>
        </div>

        <div>
          <Label htmlFor="tiempo-cargo">Tiempo en el cargo</Label>
          <Input id="tiempo-cargo" placeholder="2" />
        </div>

        <div className="flex items-center space-x-2">
          <Switch 
            id="comision" 
            checked={isComision}
            onCheckedChange={setIsComision}
          />
          <Label htmlFor="comision">
            Forma parte de comisión receptora de efectos, SAF o ...
          </Label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-4">
        <Button variant="secondary">Siguiente</Button>
        <Button>Guardar</Button>
      </CardFooter>
    </Card>
  )
}