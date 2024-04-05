import styled from 'styled-components'
const StyledLink = styled.a`
    text-decoration: none;
    // color: inherit;
`
const Work = () => {
    return (
        <div>
            <h4 className="display-4 fw-bold pt-5"> stuff i've done </h4>
            <h3 className='display-6 p-1'> 
                <StyledLink href="https://chromewebstore.google.com/detail/notate/iblgligkiffmjapcipbaiogjfhnlaako?hl=en"> 
                notate, a notion web clipper
                </StyledLink>
            </h3>
        </div>
    )
}
export default Work