import Container from 'react-bootstrap/Container'

const About = () => {
    
    const aboutMeArray = [
        {
            noun: "swe @ bloomberg working on data pipelines infra 🔧",
        },
        {
            noun: "living in manhattan, nyc 🏙️"
        },
        {
            noun: "studied cs & business at rutgers '23 🏫"
        },
        {
            noun: "can & will probably talk about surfing all day long 🏄"
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
                                    <h4 className='p-1'> {noun} </h4>
                                </>
                                )
                            })}
                        </div>
                </Container>
        </div>
    )
}

export default About;