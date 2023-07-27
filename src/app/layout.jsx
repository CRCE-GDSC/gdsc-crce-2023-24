import 'style/global.css';
import Nav from 'components/Nav';
import Events from 'components/Events';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'

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
               <Events />
            </main>
        </body>
        </html>
  )
}

export default RootLayout;

