import Container from 'react-bootstrap/Container'

const About = () => {
    
    const aboutMeArray = [
        {
            noun: "swe @ bloomberg 📈",
        },
        {
            noun: "nyc 🏙️"
        },
        {
            noun: "rutgers '23 🏫"
        },
        {
            noun: "surfer & snowboarder 🏄"
        }
    ]

    return( 
        <div>
            <h4 className="display-4 fw-bold pt-5"> about me</h4>
                <Container className='d-flex align-items-center justify-content-center'>
                        <div>
                            {aboutMeArray.map(({noun, imagePath}) => {
                                return( 
                                <>
                                    <h3 className='display-6 p-1'> {noun} </h3>
                                </>
                                )
                            })}
                        </div>
                </Container>
        </div>
    )
}

export default About;