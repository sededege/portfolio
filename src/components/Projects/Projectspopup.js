import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import tesmogif from "../../components/../Assets/Projects/tesmo/tesmotest.gif";
import home from "../../components/../Assets/Projects/mora/home.png";
import pikestore from "../../components/../Assets/Projects/pikestore/pikestore.png";
import detail from "../../components/../Assets/Projects/mora/detalledesk.png";
import cart from "../../components/../Assets/Projects/mora/cart.png";
import detailcel from "../../components/../Assets/Projects/mora/detallecel.png";
import { useParams } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import metaveropdf from "../../components/../Assets/metavero.pdf";
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
      <div className="h-[89vh]">
        <Parallax pages={2} horizontal>
          <ParallaxLayer
            className=" h-full"
            id="1"
            speed={0.4}
            offset={0}
            factor={1}
          >
            <div className="h-full items-center flex justify-center flex-col ">
              <h1 className="text-[1rem] font-bold text-blue-500">
                Thesmophoria
              </h1>

              <p className="w-full p-4 md:w-1/2">
                Thesmophoria was an artistic project that suffered a rug pull by
                its founder, causing the community to lose everything. The
                community refused to let the project die. In just 48 hours, they
                raised 160 sol in donations to remint the project. Now the floor
                price is higher than the all time high before the rug pull, with
                rare NFTs selling for over 30+ $SOL. Now, the new Thesmophoria
                team is working hard to build the project back up stronger than
                ever, with a new website and roadmap for the future. Join the
                Thesmophoria movement and be a part of something special. Visit
                our Discord to learn more and connect with our passionate and
                knowledgeable community.
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
            offset={0.8}
            factor={1}
          >
            <div className="h-full items-center justify-center flex-col md:flex hidden  px-10">
              <img
                className="w-3/4 rounded-lg shadow-md"
                src={tesmogif}
                alt="gif"
              />
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  };
  const Mora = () => {
    const link = "https://www.morafit.uy";
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
              <h1 className="text-[1rem] font-bold text-blue-500">Mora</h1>

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
            <div className="h-full items-center justify-center flex-col md:flex hidden  px-10">
              <img
                className="w-full rounded-lg shadow-md"
                src={home}
                alt="gif"
              />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            className=" h-full"
            id="1"
            speed={0.4}
            offset={2.2}
            factor={1}
          >
            <div className="h-full items-center justify-center flex-col md:flex hidden  px-10">
              <img
                className="w-full rounded-lg shadow-md"
                src={detail}
                alt="gif"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            className=" h-full"
            id="1"
            speed={0.4}
            offset={3}
            factor={1}
          >
            <div className="h-full items-center justify-center flex-col md:flex hidden  px-10 ">
              <img
                className="w-full rounded-lg shadow-md"
                src={cart}
                alt="gif"
              />
            </div>
          </ParallaxLayer>
        </Parallax>
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
  const Metavero = () => {
    const link = "https://www.pikestore.com.uy";
    return (
      <div className="h-[89vh]">
        <Parallax pages={2}>
          <ParallaxLayer
            className=" h-full"
            id="1"
            speed={0.4}
            offset={0}
            factor={1}
          >
            <div className="h-full items-center flex justify-center flex-col ">
              <h1 className="text-[1rem] font-bold text-blue-500">Metavero</h1>

              <p className="w-full p-4 md:w-1/2">
                Metavero is a modern and intuitive application designed to
                enhance the user experience of shopping for furniture online.
                The app allows users to visualize furniture products in their
                own space, using augmented reality technology. The user
                interface of the app is built using React JS and Bootstrap CSS,
                ensuring a seamless and responsive experience across devices.
                The backend is powered by WordPress, which allows for easy
                content management and customization. The app features a wide
                range of furniture products from different categories such as
                living room, bedroom, dining room, and office. Users can browse
                through the available products, filter them by various criteria,
                and select the ones they like. Once a user selects a product,
                they can use the augmented reality feature to see how it would
                look in their own space. The app uses the camera on the user's
                device to capture the space and superimpose the furniture
                product in real-time. Users can move the product around, rotate
                it, and adjust its size and position until they are satisfied
                with the result.
              </p>

              <a
                href={metaveropdf}
                className=" mt-2 p-2 cursor-pointer rounded-lg no-underline border-blue-500 bg-blue-500   text-white "
              >
                View documentation
              </a>

              {/* <p>Sweep right to visit >></p> */}
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            className=" h-full"
            id="1"
            speed={0.4}
            offset={0.9}
            factor={1}
          >
            <div className="h-full items-center flex justify-center flex-col ">
              <Document file="https://sebag.tech/static/media/metavero.ed426c89fa83b5df3e53.pdf">
                <Page pageNumber={12} scale={width > 786 ? 0.6 : 0.6} />
              </Document>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  };

  return (
    <div>
      {projectId === "Thesmophoria" && <Tesmophoria />}
      {projectId === "Mora" && <Mora />}
      {projectId === "Pikestore" && <Pikestore />}
      {projectId === "Metavero" && <Metavero />}
    </div>
  );
};

export default Projectspopup;
