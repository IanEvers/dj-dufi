"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface Estudio {
  id: number
  titulo: string
  institucion: string
  anioFinalizacion: string
}

export default function Component() {
  const [estudios, setEstudios] = useState<Estudio[]>([
    { id: 1, titulo: "Licenciatura en Administración", institucion: "Universidad de Buenos Aires", anioFinalizacion: "2020" }
  ])
  const [newEstudio, setNewEstudio] = useState<Estudio>({ id: 0, titulo: "", institucion: "", anioFinalizacion: "" })
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const addEstudio = () => {
    if (newEstudio.titulo && newEstudio.institucion && newEstudio.anioFinalizacion) {
      setEstudios([...estudios, { ...newEstudio, id: estudios.length + 1 }])
      setNewEstudio({ id: 0, titulo: "", institucion: "", anioFinalizacion: "" })
      setIsDialogOpen(false)
    }
  }

  return (
    <Card className="w-full rounded-none mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-2xl font-bold">Estudios</CardTitle>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Agregar estudios</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Agregar Nuevo Estudio</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="titulo" className="text-right">
                  Título
                </Label>
                <Input
                  id="titulo"
                  value={newEstudio.titulo}
                  onChange={(e) => setNewEstudio({ ...newEstudio, titulo: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="institucion" className="text-right">
                  Institución
                </Label>
                <Input
                  id="institucion"
                  value={newEstudio.institucion}
                  onChange={(e) => setNewEstudio({ ...newEstudio, institucion: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="anioFinalizacion" className="text-right">
                  Año de Finalización
                </Label>
                <Input
                  id="anioFinalizacion"
                  value={newEstudio.anioFinalizacion}
                  onChange={(e) => setNewEstudio({ ...newEstudio, anioFinalizacion: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={addEstudio}>Agregar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Título</TableHead>
              <TableHead>Institución</TableHead>
              <TableHead>Año de Finalización</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {estudios.map((estudio) => (
              <TableRow key={estudio.id}>
                <TableCell>{estudio.id}</TableCell>
                <TableCell>{estudio.titulo}</TableCell>
                <TableCell>{estudio.institucion}</TableCell>
                <TableCell>{estudio.anioFinalizacion}</TableCell>
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