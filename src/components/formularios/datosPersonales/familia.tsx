"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Component() {
  const [showNewMemberForm, setShowNewMemberForm] = useState(false)
  const [civilStatus, setCivilStatus] = useState("casado/a")

  const familyMembers = [
    { type: "Cónyuge / Conviviente", members: [{ nombre: "Jimena Coria", dni: "31938856", cuil: "27-31938856-2", edad: "38", sexo: "Femenino", estudios: "Universitarios", situacionLaboral: "Empleado", convive: "Si", domicilio: "Mismo que el titular" }] },
    { type: "Hijos/as", members: [{ nombre: "Jimena Coria", dni: "31938856", cuil: "27-31938856-2", edad: "38", sexo: "Femenino", estudios: "Universitarios", situacionLaboral: "Empleado", convive: "Si" }] },
    { type: "Personas legalmente a cargo", members: [{ nombre: "Jimena Coria", dni: "31938856", cuil: "27-31938856-2", edad: "38", sexo: "Femenino", estudios: "Universitarios", situacionLaboral: "Empleado", convive: "Si" }] },
  ]

  return (
    <Card className="w-full rounded-none mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-normal">Familia</CardTitle>
        <div className="flex items-center space-x-4">
          <Label htmlFor="civil-status">Estado civil del causante</Label>
          <Select value={civilStatus} onValueChange={setCivilStatus}>
            <SelectTrigger id="civil-status" className="w-[180px]">
              <SelectValue placeholder="Seleccionar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="casado/a">Casado/a</SelectItem>
              <SelectItem value="soltero/a">Soltero/a</SelectItem>
              <SelectItem value="divorciado/a">Divorciado/a</SelectItem>
              <SelectItem value="viudo/a">Viudo/a</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={() => setShowNewMemberForm(true)}>Nuevo integrante</Button>
        </div>
      </CardHeader>
      <CardContent>
        {!showNewMemberForm ? (
          familyMembers.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">{section.type}</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nro</TableHead>
                    <TableHead>Nombre y apellido</TableHead>
                    <TableHead>DNI</TableHead>
                    <TableHead>CUIL</TableHead>
                    <TableHead>Edad</TableHead>
                    <TableHead>Sexo</TableHead>
                    <TableHead>Estudios</TableHead>
                    <TableHead>Situación Laboral</TableHead>
                    <TableHead>Convive con el titular</TableHead>
                    {section.type === "Cónyuge / Conviviente" && <TableHead>Domicilio</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {section.members.map((member, memberIndex) => (
                    <TableRow key={memberIndex}>
                      <TableCell>{memberIndex + 1}</TableCell>
                      <TableCell>{member.nombre}</TableCell>
                      <TableCell>{member.dni}</TableCell>
                      <TableCell>{member.cuil}</TableCell>
                      <TableCell>{member.edad}</TableCell>
                      <TableCell>{member.sexo}</TableCell>
                      <TableCell>{member.estudios}</TableCell>
                      <TableCell>{member.situacionLaboral}</TableCell>
                      <TableCell>{member.convive}</TableCell>
                      {section.type === "Cónyuge / Conviviente" && <TableCell>{member.domicilio}</TableCell>}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))
        ) : (
          <form className="space-y-6">
            <h2 className="text-2xl font-semibold">Nuevo Integrante grupo familiar</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="parentesco">Parentesco</Label>
                <Select>
                  <SelectTrigger id="parentesco">
                    <SelectValue placeholder="Seleccionar" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conyuge">Cónyuge</SelectItem>
                    <SelectItem value="hijo">Hijo/a</SelectItem>
                    <SelectItem value="padre">Padre</SelectItem>
                    <SelectItem value="madre">Madre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="vive-conmigo">¿Vive conmigo?</Label>
                <Switch id="vive-conmigo" />
              </div>
              <div>
                <Label htmlFor="nombre">Nombre</Label>
                <Input id="nombre" placeholder="Add text" />
              </div>
              <div>
                <Label htmlFor="apellido">Apellido</Label>
                <Input id="apellido" placeholder="Add text" />
              </div>
              <div>
                <Label htmlFor="genero">Género</Label>
                <Select>
                  <SelectTrigger id="genero">
                    <SelectValue placeholder="Masculino" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="femenino">Femenino</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="fecha-nacimiento">Fecha de nacimiento</Label>
                <Input id="fecha-nacimiento" type="date" />
              </div>
              <div>
                <Label htmlFor="dni">DNI</Label>
                <Input id="dni" placeholder="Add text" />
              </div>
              <div>
                <Label htmlFor="cuil">CUIL</Label>
                <Input id="cuil" placeholder="Add text" />
              </div>
              <div>
                <Label htmlFor="escolaridad">Escolaridad</Label>
                <Input id="escolaridad" placeholder="Add text" />
              </div>
            </div>
            <div>
              <Label htmlFor="situacion-laboral">Situación Laboral</Label>
              <Select>
                <SelectTrigger id="situacion-laboral">
                  <SelectValue placeholder="Seleccionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="empleado">Empleado</SelectItem>
                  <SelectItem value="desempleado">Desempleado</SelectItem>
                  <SelectItem value="estudiante">Estudiante</SelectItem>
                  <SelectItem value="jubilado">Jubilado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="discapacidad">¿Posee alguna discapacidad?</Label>
              <Switch id="discapacidad" />
            </div>
            <div>
              <Label htmlFor="impedimento">Impedimento</Label>
              <Textarea id="impedimento" placeholder="Describa el impedimento si aplica" />
            </div>
            <div>
              <Label htmlFor="certificado-discapacidad">Certificado de discapacidad</Label>
              <Input id="certificado-discapacidad" type="file" />
            </div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="familiar-cargo">¿Es familiar un legalmente a cargo con sentencia judicial con carácter asistencial extendida por autoridad judicial o administrativa competente?</Label>
              <Switch id="familiar-cargo" />
            </div>
            <div>
              <Label htmlFor="sentencia-judicial">Sentencia judicial</Label>
              <Input id="sentencia-judicial" type="file" />
            </div>
            <div>
              <Label htmlFor="observaciones">Otras observaciones</Label>
              <Textarea id="observaciones" placeholder="Agregue observaciones adicionales" />
            </div>
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => setShowNewMemberForm(false)}>Cancelar</Button>
              <Button type="submit">Guardar</Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}