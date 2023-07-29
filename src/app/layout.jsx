import 'style/global.css';
// import Nav from 'components/Nav';

import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar';

export const metadata ={
  title:"GDSC CRCE",
  description:"Official site of GDSC FRCRE",
}
const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({children}) => {
  return (
    <html lang='en' className='scroll-smooth'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
              {/* <Nav/> */}
              <Navbar/>
               {children}
               <Analytics />
                </main>
        </body>
        </html>
  )
}

export default RootLayout;

