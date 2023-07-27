import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between w-full bg-[fdfdfd]">
      {/* Background Image */}
      <div className="min-h-[400px] w-[100%] relative mx-10 max-sm:hidden">
        <Image
          src="/assets/DSC.gif"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className='w-5 h-5'
        />
      </div>

      <div className="min-h-[350px] w-[100%] relative mx-10 sm:hidden">
        <Image
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjNuMDZvZHhvaTJ3dDI4MmZkMDdoeTdyaDhpNmF5aDNzNjZzdWlzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/X328DXRD2BGbFOmLe1/giphy.gif"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Your content goes here */}
        <div className="container mx-auto p-8 text-white text-center relative top-[-250px]">
          <h1 className="text-7xl font-bold blue_gradient max-sm:text-5xl max-sm:pt-28">Welcome to <span className='google_gradient'>GDSC</span></h1>
          <p className="text-3xl font-bold orange_gradient pt-12">
            Get ready to delve into the World of Developers
          </p>
          {/* Add your other components here */}
          <div className='flex-row'>
            <div className='container'>
              <div className='flex rounded-md shadow-md bg-black text-white'></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

