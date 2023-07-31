import '../style/global.css';
import Navbar from 'components/Navbar';
import { Analytics } from '@vercel/analytics/react';
import { Inter, Poppins } from 'next/font/google'

export const metadata ={
  title:"GDSC CRCE",
  description:"Official site of GDSC FRCRE",
}

const RootLayout = ({children}) => {
  return (
    <html lang='en' className='scroll-smooth'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
            <Navbar/>

               {children}
               <Analytics />
                </main>
        </body>
        </html>
  )
}

export default RootLayout;

