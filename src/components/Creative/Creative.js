import React from 'react'
import { Container } from 'react-bootstrap'

const Creative = () => {
    return (
        <Container fluid className="creative-section ">
            <h1 className="project-heading">
                Some of my work as creative <strong className="purple">director/producer</strong>
            </h1>
            <div className='px-10'>
                <iframe className='mb-2' title='YouTube video player' width='640' height='390' src='https://youtube.com/embed/pFJtaHwCdd8' frameborder='0' allowFullScreen></iframe>
                <p className='text-white'>Zeballos - Nadir</p>
                <p className='text-white'>
                    This was my first video clip made in 2019. <br></br>
                    I was in charge of the pre-production, production and post-production of it. <br></br>
                    This video clip went viral reaching 17 M views! </p>
            </div>
            <div>
                <iframe className='mb-2' title='YouTube video player' width='640' height='390' src='https://youtube.com/embed/m6z_ftJWHIo' frameborder='0' allowFullScreen></iframe>
                <p className='text-white '>Zeballos - Yendo al toque</p>
                <p className='text-white'>
                    I was in charge of the pre-production, production and post-production of it. <br></br>
                    Another video for Zeballos. </p>
            </div>
            <div>
                <iframe className='mb-2' title='YouTube video player' width='640' height='390' src='https://youtube.com/embed/96Oef93KxBI' frameborder='0' allowFullScreen></iframe>
                <p className='text-white '>Metavero spot.</p>
                <p className='text-white'>
                    In this case, what was sought with this spot, is to present "metavero", <br></br> an application which, through augmented reality,<br></br> allows you to project the "veromobili" furniture and see how they would be placed in the desired place. </p>
            </div>
            <div>
                <iframe className='mb-2' title='YouTube video player' width='640' height='390' src='https://youtube.com/embed/bUXIFsyc18k' frameborder='0' allowFullScreen></iframe>
                <p className='text-white '>Artificial intelligence, weapon or tool?</p>
                <p className='text-white'>
                Morgan Freeman invites us to reflect on the era of Artificial Intelligence...  <br></br>                 
                Role: Creative idea, Design, editing and post-production </p>
            </div>
        </Container>
    )
}

export default Creative