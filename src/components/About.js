import Container from 'react-bootstrap/Container'

const About = () => {
    
    const aboutMeArray = [
        {
            noun: "Engineer @ Bloomberg",
        },
        {
            noun: "Rutgers CS Graduate"
        },
        {
            noun: "Coder"
        },
        {
            noun: "Surfer & Snowboarder"
        }
    ]

    return( 
        <div className='full-screen'>
                <Container className='d-flex p-5 align-items-center justify-content-center'>
                        <div>
                            {aboutMeArray.map(({noun, imagePath}) => {
                                return( 
                                <>
                                    <h3 className='display-3 p-3'> {noun} </h3>
                                </>
                                )
                            })}
                        </div>
                </Container>
        </div>
    )
}

export default About;