import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gradient-to-r from-green-200 via-green-400 to-green-500'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
