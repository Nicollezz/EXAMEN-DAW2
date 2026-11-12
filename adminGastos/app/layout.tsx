import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css' 

export const metadata = {
  title: 'Administrador de Gastos',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-light text-dark">
        {children}
      </body>
    </html>
  )
}