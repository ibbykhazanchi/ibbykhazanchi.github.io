import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

const Sections = () => {
    return (
        <Container className='d-flex p-5 align-items-center justify-content-center'>
            <Stack direction='horizontal' gap={2}>
                <Button variant="light" size='lg'>
                    Projects
                </Button>
                <Button variant="light" size='lg'>
                    Blog
                </Button>
            </Stack>
        </Container>
    )
}
export default Sections