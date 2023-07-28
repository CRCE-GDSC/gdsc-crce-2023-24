import 'style/global.css';
import Nav from 'components/Nav';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google'
import Whatwedo from '../../components/ui/Whatwedo';

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
              <Nav/>
               {children}
               <Analytics />
               <Whatwedo/>
                </main>
        </body>
        </html>
  )
}

export default RootLayout;

