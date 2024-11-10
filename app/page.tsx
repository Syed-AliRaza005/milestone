import Header from "./components/Header";
import Footer from "./components/footer";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />

    
      
      <section
        id="section-1"
        className="p-8 md:p-16 bg-blue-950"
      >
          {/* img */}
        <div >
    
    <Image  className="rounded-full right-2/3 " src="/Image/ar.png" 
    alt="this is image"
    width={350}
    height={350}
    />

        </div>
   
        <div className="rounded-lg  mx-auto  bg-red-200 p-6 shadow-lg rounded- ransition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
          Syed Ali Raza
         </h2>
           <p className="text-lg font-bold md:text-xl text-black text-center">
            syedali102005@gmail.com
          </p>        
          <p className="text-lg font-bold md:text-xl text-black text-left" >
          <br />
           phone: 1445534456
           <br />
          addss:house no 2, 2nd street ,garden ,karachi.
         <br />
          Nationality : Pakistani
          </p>
          
        </div>
      </section>

      <section
        id="section-2"
        className="p-8 md:p-16 bg-blue-900"
      >
        <div className="rounded-lg container mx-auto  bg-red-200 p-6 shadow-lg rounded- ransition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 ">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
          education
             </h2>
          <p className="text-lg font-bold md:text-xl text-black text-left">
           degree: intermidiate
           <br />
           college : Islamia science college
           <br />
           Passing-Year : 2024
          </p>
        </div>
      </section>


      <section
        id="section-3"
        className="p-8 md:p-16 bg-blue-900"
      >
        <div className="rounded-lg container mx-auto  bg-red-200 p-6 shadow-lg rounded- ransition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 ">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
          Skill
             </h2>
        
          <p className="text-lg font-bold md:text-xl text-black text-left">
        
          -Best communication
           <br />
           -MS-Office
           <br />
           -trouble shooting
           <br />
           -Graphic Desinging
           <br />
           -next js

                 </p>
        </div>
      </section>

      <section
        id="section-4"
        className="p-8 md:p-16 bg-blue-900"
      >
        <div className="rounded-lg container mx-auto  bg-red-200 p-6 shadow-lg rounded- ransition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 duration-300 ">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">
          Experience
             </h2>
          <p className="text-lg font-bold md:text-xl text-black text-left">
           Company Name: AR Software house
           <br />
          Destination : IT manager
        
           <br />
           duration : 2year
           
           
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;