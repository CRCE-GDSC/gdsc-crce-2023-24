import 'style/global.css';
import Nav from 'components/Nav';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
<<<<<<< HEAD
import Navbar from '../../components/Navbar';
=======
>>>>>>> parent of 1f8868e (Merge branch 'master' of https://github.com/CRCE-GDSC/gdsc-crce)

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
              <Nav/>
               {children}
               <Analytics />
<<<<<<< HEAD
=======
                
>>>>>>> parent of 1f8868e (Merge branch 'master' of https://github.com/CRCE-GDSC/gdsc-crce)
                </main>
        </body>
        </html>
  )
}

export default RootLayout;

