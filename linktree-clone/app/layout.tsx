import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return(
    <html lang='en'>
      <body className='bg-gradient-to-r from-green-200 via-green-400 to-green-500'>{children}</body>
    </html>
  )
}