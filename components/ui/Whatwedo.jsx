import React from "react";

const Whatwedo = () => {
    return(
      <div>
        <h1 class="text-4xl flex justify-center p-8"><b>What We Do</b></h1>
        <br></br>
        <br></br>
        <div className="flex justify-center">
            <p class="max-w-md max-w-prose">DSC CRCE boasts of a multifaceted community with members from various disciplines working together.
            By joining GDSC CRCE students get to work with an exceptionally skilled group of developers, connect 
            with developers around the world, make projects,organized workshops and many more.</p>
        </div>
           <br></br>
            <br></br>  
          <div class="grid grid-cols-3 gap-20">

            <div class="...">
               <div class="box-border h-32 w-32 p-4 border-0 ...">
                       <figure>
                            <img src="https://media0.giphy.com/media/sIfiAGLJ8jmSf6xUK9/giphy.gif"/>
                       </figure>
                </div>
                <p class="flex justify-center"><b>Blockchain</b></p>
            </div>

            <div class="...">
                <div class="box-border h-32 w-32 p-4 border-0 ...">
                          <figure>
                                <img src="https://miro.medium.com/v2/resize:fit:866/1*h1dUrjhkHzMU46jW1cQjAg.gif"/>
                          </figure>
                          
                    </div>
                    <p class="flex justify-center"><b>Machine Learning</b></p>
            </div>

            <div class="...">
              <div class="box-border h-32 w-32 p-4 border-0 ...">
                            <figure>
                                  <img src="https://www.123code.org/images/fields/GIF/cyber-security.gif"/>
                            </figure>
                      </div>
                      <p class="flex justify-center"><b>Cyber Security</b></p>
            </div>

                  

            <div class="...">
               <div class="box-border h-32 w-32 p-4 border-0 ...">
                          <figure>
                                <img src="https://www.synycs.com/images/Cloud%20Computing/Cloud%20Avatar.gif"/>
                          </figure>
                    </div>
                    <p class="flex justify-center"><b>Cloud Computing</b></p>
            </div>


            <div class="...">
                  <div class="box-border h-32 w-32 p-4 border-0 ...">
                          <figure>
                                <img src="https://www.sataware.com/wp-content/uploads/2021/01/IOT-3.1.1-sataware.gif"/>
                          </figure>
                    </div>
                    <p class="flex justify-center"><b>Internet of Things</b></p>
            </div>

            <div class="...">
                     <div class="box-border h-32 w-32 p-0 border-0 ...">
                          <figure>
                                <img src="https://i1.wp.com/china.wherefor.org/wp-content/uploads/2018/07/mobile-development2-2.gif?fit=800%2C600&ssl=1"/>
                          </figure>
                    </div>
                    <p class="flex justify-center"><b>App Development</b></p>
            </div>

            <div class="..."></div>

            <div class="...">
                   <div class="box-border h-32 w-32 p-4 border-0 ...">
                          <figure>
                                <img src="https://i.pinimg.com/originals/bb/37/5c/bb375cdd655184ca2715ac5059e73651.gif"/>
                          </figure>
                    </div>
                    <p class="flex justify-center"><b>Web Development</b></p>
            </div>

            <div class="..."></div>
          </div>
          <br></br>
        <br></br>
      </div>
      
    );
}

export default Whatwedo;