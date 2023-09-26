import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

const Sections = () => {
    return (
        <div className='text-center'>
            <Container className='p-5 align-items-center justify-content-center'>
                <h4 className="display-4 fw-bold pt-3"> Who am I? </h4>
                <ul>
                    <li> <h2 className='display-9 p-1'> Engineer @ Bloomberg </h2></li>
                    <li> <h2 className='display-9 p-1'> Indie Hacker </h2></li>
                    <li> <h2 className='display-9 p-1'> Rutgers CS Grad </h2></li>
                    <li> <h2 className='display-9 p-1'> Surfer & Snowboarder </h2> </li>
                </ul>
                <h4 className="display-4 fw-bold pt-3"> Stuff I'm working on </h4>
            </Container>
        </div>
    )
}
export default Sections