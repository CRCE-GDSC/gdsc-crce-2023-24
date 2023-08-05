

const Whatwedo = () => {
    return(
      <div className="w-full bg-sky-50 px-12 scroll-mt-96 py-10" id="what">
<div className="flex justify-center">
  <h3 className="text-gray-700 text-5xl max-lg:text-4xl max-md:text-4xl max-sm:text-3xl max-sm:pl-2 mb-6 py-3 px-4 font-poppins x-shadow-green text-center w-auto items-center justify-center">What We Do</h3>
</div>


        <div className="flex justify-center">
            <p className="max-w-3xl text-center text-xl mb-10 text-gray-600 text-[16px]">GDSC CRCE boasts of a multifaceted community with members from various disciplines working together.
            By joining GDSC CRCE students get to work with an exceptionally skilled group of developers, connect 
            with developers around the world, make projects,organized workshops and many more.</p>
        </div> 
        <h6 className="text-center text-3xl xl:text-4xl font-poppins">We work on:</h6>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10 mb-2 max-w-4xl mx-auto">


            <div className="flex flex-col justify-center items-center ">
               <div className="box-border h-32 w-32 p-2 border-0 ... justify-center items-center">
                       <figure className="hover:translate-y-0.5">
                            <img className="mx-auto justify-center items-center text-center" src="https://media0.giphy.com/media/sIfiAGLJ8jmSf6xUK9/giphy.gif"/>
                       </figure>
                </div>
                <p className="flex justify-center"><b>Blockchain</b></p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="box-border h-28 w-28 p-2 border-0 ...">
                          <figure className="hover:translate-y-0.5">
                                <img src="https://miro.medium.com/v2/resize:fit:866/1*h1dUrjhkHzMU46jW1cQjAg.gif"/>
                          </figure>
                          
                    </div>
                    <p className="flex justify-center mt-4"><b>Machine Learning</b></p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="box-border h-32 w-32 p-2 border-0 ...">
                            <figure className="hover:translate-y-0.5">
                                  <img src="https://www.123code.org/images/fields/GIF/cyber-security.gif"/>
                            </figure>
                      </div>
                      <p className="flex justify-center text-center"><b>Cyber Security</b></p>
            </div>

                  

            <div className="flex flex-col justify-center items-center">
               <div className="box-border h-32 w-32 p-2 border-0 ...">
                          <figure className="hover:translate-y-0.5">
                                <img src="https://www.synycs.com/images/Cloud%20Computing/Cloud%20Avatar.gif"/>
                          </figure>
                    </div>
                    <p className="flex justify-center text-center"><b>Cloud Computing</b></p>
            </div>


            <div className="flex flex-col justify-center items-center">
                  <div className="box-border h-32 w-32 p-2 border-0 ...">
                          <figure className="hover:translate-y-0.5">
                                <img src="https://www.sataware.com/wp-content/uploads/2021/01/IOT-3.1.1-sataware.gif"/>
                          </figure>
                    </div>
                    <p className="flex justify-center text-center"><b>Internet of Things</b></p>
            </div>

            <div className="flex flex-col justify-center items-center">
                     <div className="box-border h-32 w-32 p-0 border-0 ">
                          <figure className="hover:translate-y-0.5">
                                <img src="https://i1.wp.com/china.wherefor.org/wp-content/uploads/2018/07/mobile-development2-2.gif?fit=800%2C600&ssl=1"/>
                          </figure>
                    </div>
                    <p className="flex justify-center text-center"><b>App Development</b></p>
            </div>

            <div className="..."></div>

            <div className="flex flex-col justify-center items-center">
                   <div className="box-border h-32 w-32 p-2 border-0 ...">
                          <figure className="hover:translate-y-0.5">
                                <img src="https://i.pinimg.com/originals/bb/37/5c/bb375cdd655184ca2715ac5059e73651.gif"/>
                          </figure>
                    </div>
                    <p className="flex justify-center text-center"><b>Web Development</b></p>
            </div>

            <div className="..."></div>
          </div>
      </div>
      
    );
}

export default Whatwedo;