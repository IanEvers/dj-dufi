"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface SituacionJudicial {
  id: number
  tipo: string
  caratula: string
  nroExpte: string
  estadoProcesal: string
  juzgado: string
}

export default function Component() {
  const [situaciones, setSituaciones] = useState<SituacionJudicial[]>([
    { id: 1, tipo: "", caratula: "", nroExpte: "", estadoProcesal: "", juzgado: "" }
  ])

  const addNewSituacion = () => {
    setSituaciones([...situaciones, { 
      id: situaciones.length + 1, 
      tipo: "", 
      caratula: "", 
      nroExpte: "", 
      estadoProcesal: "", 
      juzgado: "" 
    }])
  }

  return (
    <Card className="w-full  mx-auto rounded-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold">Situaciones Judiciales</CardTitle>
        <Button onClick={addNewSituacion}>Nueva Situación judicial</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nro</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Carátula</TableHead>
              <TableHead>Nro Expte</TableHead>
              <TableHead>Estado procesal</TableHead>
              <TableHead>Juzgado</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {situaciones.map((situacion) => (
              <TableRow key={situacion.id}>
                <TableCell>{situacion.id}</TableCell>
                <TableCell>{situacion.tipo}</TableCell>
                <TableCell>{situacion.caratula}</TableCell>
                <TableCell>{situacion.nroExpte}</TableCell>
                <TableCell>{situacion.estadoProcesal}</TableCell>
                <TableCell>{situacion.juzgado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button>Guardar</Button>
      </CardFooter>
    </Card>
  )
}