import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className='fixed top-0 left-0 z-50 w-full bg-white flex-between gap-x-1 md:px-36 max-sm:px-0 max-sm:justify-center max-md:px-0'>
      <Link href='/' className='flex gap-2 flex-center pl-1 max-sm:gap-0'>
        <div className="justify-center">
          <Image
            src='/assets/GDSC_CRCE.png'
            alt='logo'
            width={400}
            height={200}
            layout="fixed"
            className='object-contain'
          />
        </div>
      </Link>
      <div className='flex pr-32 max-sm:hidden max-sm:pr-0'>
        <Link href='/' className='blue_link'>Home</Link>
        <Link href='#about' className='blue_link'>About Us</Link>
        <Link href='#what' className='blue_link'>What We Do</Link>
        <Link href='#events' className='blue_link'>Events</Link>
        <Link href='#team' className='blue_link'>Our Team</Link>
        <Link href='/' className='blue_link'>Contact Us</Link>
      </div>
    </nav>
  );
}

export default Nav;
