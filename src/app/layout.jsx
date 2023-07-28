import 'style/global.css';
import Nav from 'components/Nav';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
<<<<<<< HEAD
import Whatwedo from '../../components/ui/Whatwedo';
=======
import Team from '../../components/Team';
>>>>>>> c246008b636df7f4a72c3ee2bcdf2735e592f909

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
               <Whatwedo/>
                </main>
=======
            </main>
>>>>>>> c246008b636df7f4a72c3ee2bcdf2735e592f909
        </body>
        </html>
  )
}

export default RootLayout;

