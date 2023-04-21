import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import tesmogif from "../../components/../Assets/Projects/tesmo/tesmotest.gif";
import home from "../../components/../Assets/Projects/mora/home.png";
import pikestore from "../../components/../Assets/Projects/pikestore/pikestore.png";
import estrellas from "../../components/../Assets/Projects/5estrellas/5estrellas.png";
import detail from "../../components/../Assets/Projects/mora/detalledesk.png";
import cart from "../../components/../Assets/Projects/mora/cart.png";
import detailcel from "../../components/../Assets/Projects/mora/detallecel.png";
import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import metaveropdf from "../../components/../Assets/metavero.pdf";
import { MdKeyboardDoubleArrowUp } from 'react-icons/md'
import metaveromockup from '../../Assets/Projects/metavero/metaveromockup.png'
import estrellasmockup from '../../Assets/Projects/5estrellas/5estrellasmockup.png'
import moramockup from '../../Assets/Projects/mora/moramockup.png'
import thesmomockup from '../../Assets/Projects/tesmo/thesmomockup.png'
const Projectspopup = () => {
  const [width, setWidth] = React.useState(1200);

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const { projectId } = useParams();
  console.log(projectId);

  const Tesmophoria = () => {
    const link = "https://www.thesmophoria.io";
   
    return (
      <div className="h-[80vh] mt-[10vh] overflow-auto">
       
            <div className="h-full items-center justify-center grid grid-cols-1 md:grid-cols-4 px-4 md:ml-20 md:px-20 ">
              <div className="md:col-span-1 flex flex-col gap-2 ">
              <h1 className="text-[1rem] font-bold text-blue-500">Tesmophoria</h1>

              <p className="w-full overflow-auto">
              Thesmophoria, a blockchain platform built on Solana, faced a rug pull by its founder. However, the community showed their resilience by rallying together to remint the project and prevent it from collapsing. As a React JS developer, I built their project website and platform where users can stake their NFTs to earn points for rewards. I utilized Node and Firebase, and leveraged Quicknode RPC to facilitate interactions with the Solana blockchain.            </p>
                <a
                href={link}
                className=" mt-2 p-2 cursor-pointer rounded-lg no-underline border-blue-500 bg-blue-500   text-white "
              >
                Visit web
              </a>
              <a
                href='https://earn.thesmophoria.io/'
                className=" mt-2 p-2 cursor-pointer rounded-lg no-underline border-blue-500 bg-blue-500   text-white "
              >
                Visit plataform
              </a>
             
             </div>
             <div className="md:col-span-3 flex flex-col gap-2 ">
              <img src={thesmomockup} className="md:h-[70vh] object-contain md:object-cover" alt='metavero' />
</div>
             </div>

      </div>
      
    );
  };
  const Mora = () => {
    const link = "https://www.morafit.uy";
     return (
        <div className="h-[80vh] mt-[10vh] overflow-auto">
         
              <div className="h-full items-center justify-center grid grid-cols-1 md:grid-cols-4 px-4 md:ml-20 md:px-20 ">
                <div className="md:col-span-1 flex flex-col gap-2 ">
                <h1 className="text-[1rem] font-bold text-blue-500">Mora fit</h1>
  
                <p className="w-full overflow-auto">
                Eccommerce developed in React JS + Tailwind CSS, Backend in
                  Firebase, REST API integration with Mercadopago both through
                  Node JS.              </p>
                <a
                  href={link}
                  className=" mt-2 p-2 cursor-pointer rounded-lg no-underline border-blue-500 bg-blue-500   text-white "
                >
                  Visit web
                </a>
               
               </div>
               <div className="md:col-span-3 flex flex-col gap-2 ">
                <img src={moramockup} className="md:h-[70vh] object-contain md:object-cover" alt='metavero' />
  </div>
               </div>
  
        </div>
        
      );
  };

  const Pikestore = () => {
    const link = "https://www.pikestore.com.uy";
    return (
      <div className="h-[89vh]">
        <Parallax pages={5}>
          <ParallaxLayer
            className=" h-full"
            id="1"
            speed={0.4}
            offset={0}
            factor={1}
          >
            <div className="h-full items-center flex justify-center flex-col ">
              <h1 className="text-[1rem] font-bold text-blue-500">Pikestore</h1>

              <p className="w-full p-4 md:w-1/2">
                Eccommerce developed in React JS + Tailwind CSS, Backend in
                Firebase, REST API integration with Mercadopago both through
                Node JS.
              </p>

              <a
                href={link}
                className=" mt-2 p-2 cursor-pointer rounded-lg no-underline border-blue-500 bg-blue-500   text-white "
              >
                Visit web
              </a>

              {/* <p>Sweep right to visit >></p> */}
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            className=" h-full"
            id="1"
            speed={0.4}
            offset={1}
            factor={1}
          >
            <div className="h-full items-center justify-center flex-col md:flex hidden px-10">
              <img
                className="w-full rounded-lg shadow-md"
                src={pikestore}
                alt="gif"
              />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  };
  const Estrellas = () => {
    const link = "https://www.articulos5estrellas.com.uy";
    return (
      <div className="h-[80vh] mt-[10vh] overflow-auto">
       
            <div className="h-full items-center justify-center grid grid-cols-1 md:grid-cols-4 px-4 md:ml-20 md:px-20 ">
              <div className="md:col-span-1 flex flex-col gap-2 ">
              <h1 className="text-[1rem] font-bold text-blue-500">5 Estrellas</h1>

              <p className="w-full overflow-auto">
              Eccommerce developed in React JS + Tailwind CSS, Backend in
                Firebase, REST API integration with Mercadopago both through
                Node JS.              </p>
              <a
                href={link}
                className=" mt-2 p-2 cursor-pointer rounded-lg no-underline border-blue-500 bg-blue-500   text-white "
              >
                Visit web
              </a>
             
             </div>
             <div className="md:col-span-3 flex flex-col gap-2 ">
              <img src={estrellasmockup} className="md:h-[70vh] object-contain md:object-cover" alt='metavero' />
</div>
             </div>

      </div>
      
    );
  };
  const Metavero = () => {
    const link = "https://www.pikestore.com.uy";
    return (
      <div className="h-[80vh] mt-[10vh] overflow-auto">
       
            <div className="h-full items-center justify-center grid md:grid-cols-4 md:ml-20 md:px-20 px-4 ">
              <div className="md:col-span-1 flex flex-col gap-2 ">
              <h1 className="text-[1rem] font-bold text-blue-500">Metavero</h1>

              <p className="w-full overflow-auto">
              Metavero is an augmented reality app for online furniture shopping. Built with React JS and Bootstrap CSS, it provides a seamless and responsive user interface. The app offers a variety of furniture products, which can be filtered and viewed in AR using the camera on the user's device. The backend is powered by WordPress for easy content management.
              </p>
              <a
                href={metaveropdf}
                className=" mt-2 p-2 cursor-pointer rounded-lg no-underline border-blue-500 bg-blue-500   text-white "
              >
                View documentation
              </a>
              <a
                href='https://xd.adobe.com/view/a643ca33-2dbf-4c93-b580-0a7ec695de75-f310/screen/d33988a1-73d3-4781-b385-836dade2c1cc?fullscreen'
                className=" mt-2 p-2 cursor-pointer rounded-lg no-underline border-blue-500 bg-blue-500   text-white "
              >
                View adobe XD
              </a>
             
             </div>
             <div className="md:col-span-3 flex flex-col gap-2 ">
              <img src={metaveromockup} className="md:h-[70vh] h-full object-contain md:object-cover" alt='metavero' />
</div>
             </div>

      </div>
    );
  };

  return (
    <div>
      {projectId === "Thesmophoria" && <Tesmophoria />}
      {projectId === "Mora" && <Mora />}
      {projectId === "Pikestore" && <Pikestore />}
      {projectId === "Metavero" && <Metavero />}
      {projectId === "5Estrellas" && <Estrellas />}
    </div>
  );
};

export default Projectspopup;
