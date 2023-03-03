import React from 'react'
import { Container } from 'react-bootstrap'

const Creative = () => {
    return (
        <Container fluid className="creative-section  ">
            <h1 className="text-gray-500">
                Some of my work as creative <strong className="text-blue-500">director/producer</strong>
            </h1>
            <div className=' w-full justify-center  '>
                <iframe className='mb-2 m-auto h-[400px] w-full' title='YouTube video player'  src='https://youtube.com/embed/pFJtaHwCdd8' frameborder='0' allowFullScreen></iframe>
                <p className='text-gray-500'>Zeballos - Nadir</p>
                <p className='text-gray-500'>
                    This was my first video clip made in 2019. <br></br>
                    I was in charge of the pre-production, production and post-production of it. <br></br>
                    This video clip went viral reaching 17 M views! </p>
            </div>
            <div>
                <iframe className='mb-2 m-auto h-[400px] w-full'  title='YouTube video player' src='https://youtube.com/embed/m6z_ftJWHIo' frameborder='0' allowFullScreen></iframe>
                <p className='text-gray-500 '>Zeballos - Yendo al toque</p>
                <p className='text-gray-500'>
                    I was in charge of the pre-production, production and post-production of it. <br></br>
                    Another video for Zeballos. </p>
            </div>
            <div>
                <iframe className='mb-2 m-auto h-[400px] w-full'  title='YouTube video player' src='https://youtube.com/embed/96Oef93KxBI' frameborder='0' allowFullScreen></iframe>
                <p className='text-gray-500 '>Metavero spot.</p>
                <p className='text-gray-500'>
                    In this case, what was sought with this spot, is to present "metavero", <br></br> an application which, through augmented reality,<br></br> allows you to project the "veromobili" furniture and see how they would be placed in the desired place. </p>
            </div>
            <div>
                <iframe className='mb-2 m-auto h-[400px] w-full'  title='YouTube video player' src='https://youtube.com/embed/bUXIFsyc18k' frameborder='0' allowFullScreen></iframe>
                <p className='text-gray-500 '>Artificial intelligence, weapon or tool?</p>
                <p className='text-gray-500'>
                Morgan Freeman invites us to reflect on the era of Artificial Intelligence...  <br></br>                 
                Role: Creative idea, Design, editing and post-production </p>
            </div>
        </Container>
    )
}

export default Creative