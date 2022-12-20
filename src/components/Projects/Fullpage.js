import React from 'react'
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage'
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import mora from "../../Assets/Projects/mora.png";

const Fullpages = () => {
    const sectionstyle = {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const Screen = (props) => {
        return (
            <div >
                <div style={{ color: 'white' }}>
                    <h1 className='text-sky-500'>{props.title}</h1>
                    <p className='font-semibold'>{props.type}</p>
                    <ul className='flex gap-2 justify-center'>
                        {
                            props.tech.map(
                                a =>
                                    <li>- {a}</li>
                            )
                        }
                    </ul>
                    {props.demoLink && (
                        <Button
                            variant="primary"
                            href={props.demoLink}
                            target="_blank"
                            style={{ marginLeft: "10px", marginTop: '10px' }}
                        >
                            <div className='flex gap-2 items-center'>
                                <CgWebsite />
                                Demo
                            </div>

                        </Button>
                    )}




                </div>
                <div className='w-full flex overflow-x-auto mt-10'>
                    <img className='w-[50%] object-cover' alt='asd' src={mora} />
                    <img className='w-[50%] object-cover' alt='asd' src={mora} />
                    <img className='w-[50%] object-cover' alt='asd' src={mora} />

                </div>
            </div>

        )
    }
    return (
        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>

                <FullpageSection style={sectionstyle}>
                    <div>
                        <h1 className="project-heading">
                            My Recent <strong className="purple">Works</strong>
                        </h1> <br></br>

                        <p style={{ color: 'white' }}>Scroll down</p>
                    </div>
                </FullpageSection>
                <FullpageSection style={sectionstyle}>
                    <Screen
                        title='Mora | Conjuntos deportivos'
                        tech={['React Js', 'Tailwind Css', 'Node JS', 'Firebase', 'Mercado Pago Integration']}
                        /*                         description="Eccommerce developed in React JS + Tailwind CSS, Backend in Firebase, REST API integration with Mercadopago both through Node JS. Status: In development. Year: 2022"
                         */
                        img={mora}
                        type='Eccomerce & Dashboard'
                        demoLink="https://www.morafit.uy/"
                    />
                </FullpageSection>
                <FullpageSection style={sectionstyle}>
                    <h1>Screen 3</h1>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    )
}

export default Fullpages

