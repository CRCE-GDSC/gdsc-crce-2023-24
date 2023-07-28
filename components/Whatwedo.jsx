

const Whatwedo = () => {
    return(
      <div className="w-full bg-sky-50 px-12">
        <h1 className="text-4xl xl:text-5xl flex justify-center p-8 font-semibold mt-10 text-center">What We Do</h1>
        <div className="flex justify-center">
            <p className="max-w-3xl text-center text-xl mb-10 text-gray-600 text-[16px]">GDSC CRCE boasts of a multifaceted community with members from various disciplines working together.
            By joining GDSC CRCE students get to work with an exceptionally skilled group of developers, connect 
            with developers around the world, make projects,organized workshops and many more.</p>
        </div> 
        <h6 className="text-center text-3xl xl:text-4xl font-semibold">We work on:</h6>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="flex flex-col justify-center items-center">
               <div className="box-border h-32 w-32 p-4 border-0 ... justify-center items-center">
                       <figure className="hover:translate-y-0.5">
                            <img className="mx-auto justify-center items-center text-center" src="https://media0.giphy.com/media/sIfiAGLJ8jmSf6xUK9/giphy.gif"/>
                       </figure>
                </div>
                <p className="flex justify-center"><b>Blockchain</b></p>
            </div>

            <div className="flex flex-col justify-center items-center">
                <div className="box-border h-28 w-28 p-4 border-0 ...">
                          <figure className="hover:translate-y-0.5">
                                <img src="https://miro.medium.com/v2/resize:fit:866/1*h1dUrjhkHzMU46jW1cQjAg.gif"/>
                          </figure>
                          
                    </div>
                    <p className="flex justify-center mt-4"><b>Machine Learning</b></p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="box-border h-32 w-32 p-4 border-0 ...">
                            <figure className="hover:translate-y-0.5">
                                  <img src="https://www.123code.org/images/fields/GIF/cyber-security.gif"/>
                            </figure>
                      </div>
                      <p className="flex justify-center text-center"><b>Cyber Security</b></p>
            </div>

                  

            <div className="flex flex-col justify-center items-center">
               <div className="box-border h-32 w-32 p-4 border-0 ...">
                          <figure className="hover:translate-y-0.5">
                                <img src="https://www.synycs.com/images/Cloud%20Computing/Cloud%20Avatar.gif"/>
                          </figure>
                    </div>
                    <p className="flex justify-center text-center"><b>Cloud Computing</b></p>
            </div>


            <div className="flex flex-col justify-center items-center">
                  <div className="box-border h-32 w-32 p-4 border-0 ...">
                          <figure className="hover:translate-y-0.5">
                                <img src="https://www.sataware.com/wp-content/uploads/2021/01/IOT-3.1.1-sataware.gif"/>
                          </figure>
                    </div>
                    <p className="flex justify-center text-center"><b>Internet of Things</b></p>
            </div>

            <div className="flex flex-col justify-center items-center">
                     <div className="box-border h-32 w-32 p-0 border-0...">
                          <figure className="hover:translate-y-0.5">
                                <img src="https://i1.wp.com/china.wherefor.org/wp-content/uploads/2018/07/mobile-development2-2.gif?fit=800%2C600&ssl=1"/>
                          </figure>
                    </div>
                    <p className="flex justify-center text-center"><b>App Development</b></p>
            </div>

            <div className="..."></div>

            <div className="flex flex-col justify-center items-center">
                   <div className="box-border h-32 w-32 p-4 border-0 ...">
                          <figure className="hover:translate-y-0.5">
                                <img src="https://i.pinimg.com/originals/bb/37/5c/bb375cdd655184ca2715ac5059e73651.gif"/>
                          </figure>
                    </div>
                    <p className="flex justify-center text-center"><b>Web Development</b></p>
            </div>

            <div className="..."></div>
          </div>
          <br></br>
        <br></br>
      </div>
      
    );
}

export default Whatwedo;