"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  const [deseaCambioDestino, setDeseaCambioDestino] = useState(true)
  const [deseaCambioGuarnicion, setDeseaCambioGuarnicion] = useState(false)

  return (
    <Card className="w-full rounded-none mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Destino Futuro</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Switch
              id="cambio-destino"
              checked={deseaCambioDestino}
              onCheckedChange={setDeseaCambioDestino}
            />
            <Label htmlFor="cambio-destino">Desea cambio de destino:</Label>
            <span className="font-bold">{deseaCambioDestino ? "SI" : "NO"}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="cambio-guarnicion"
              checked={deseaCambioGuarnicion}
              onCheckedChange={setDeseaCambioGuarnicion}
            />
            <Label htmlFor="cambio-guarnicion">Desea cambio de guarnición:</Label>
            <span className="font-bold">{deseaCambioGuarnicion ? "SI" : "NO"}</span>
          </div>
        </div>

        <div>
          <Label htmlFor="fundamento">Fundamento sintético por el cual desea cambio de destino</Label>
          <Textarea id="fundamento" placeholder="Escriba aquí..." />
        </div>

        <div>
          <Label htmlFor="opinion">Opinión sintética sobre su aspiración profesional</Label>
          <Textarea id="opinion" placeholder="Escriba aquí..." />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="primer-destino">Primer destino favorable deseado:</Label>
            <Select>
              <SelectTrigger id="primer-destino">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="destino1">Destino 1</SelectItem>
                <SelectItem value="destino2">Destino 2</SelectItem>
                <SelectItem value="destino3">Destino 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="segundo-destino">Segundo destino favorable deseado:</Label>
            <Select>
              <SelectTrigger id="segundo-destino">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="destino1">Destino 1</SelectItem>
                <SelectItem value="destino2">Destino 2</SelectItem>
                <SelectItem value="destino3">Destino 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="destino-desfavorable">Destino desfavorable deseado:</Label>
            <Select>
              <SelectTrigger id="destino-desfavorable">
                <SelectValue placeholder="Seleccionar" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="destino1">Destino 1</SelectItem>
                <SelectItem value="destino2">Destino 2</SelectItem>
                <SelectItem value="destino3">Destino 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="deseo-alternativo">En caso de no ingresar en la primera guarnición mi deseo es:</Label>
          <Select>
            <SelectTrigger id="deseo-alternativo">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="opcion1">Opción 1</SelectItem>
              <SelectItem value="opcion2">Opción 2</SelectItem>
              <SelectItem value="opcion3">Opción 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="ultima-guarnicion">Última guarnición en zona I</Label>
          <Select>
            <SelectTrigger id="ultima-guarnicion">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="guarnicion1">Guarnición 1</SelectItem>
              <SelectItem value="guarnicion2">Guarnición 2</SelectItem>
              <SelectItem value="guarnicion3">Guarnición 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Expediente por cambio/ permanencia de destino</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nro expediente</TableHead>
                <TableHead>Causa</TableHead>
                <TableHead>Actualizó</TableHead>
                <TableHead>Nro expediente actualizado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={4} className="text-center">No se han cargado expedientes</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="bg-pink-100 p-4 rounded-md">
          <p className="text-sm">
            Los oficiales jefes y superiores tienen que elegir preferencia de asignación entre los diferentes componentes
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Guardar</Button>
      </CardFooter>
    </Card>
  )
}