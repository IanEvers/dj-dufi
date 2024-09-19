import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function Component() {
  return (
    <Card className="w-full rounded-none mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-normal">Contacto</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-base font-normal">
            Correo electrónico de contacto
          </Label>
          <Input id="email" placeholder="johndoe@gmail.com" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base font-normal">
            Celular
          </Label>
          <Input id="phone" placeholder="Add text" type="tel" />
        </div>
        <div className="bg-yellow-100 p-4 rounded-md">
          <p className="text-sm">
            Es el correo personal{" "}
            <strong>(Deberá confirmar el correo de notificaciones)</strong>
            <br />Y el celular personal <strong>*</strong>
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