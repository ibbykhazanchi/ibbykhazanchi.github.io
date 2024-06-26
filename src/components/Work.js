import styled from 'styled-components'
const StyledLink = styled.a`
    text-decoration: none;
`
const Work = () => {
    return (
        <div>
            <h4 className="display-4 fw-bold pt-5"> stuff i've done </h4>
            <h4 className='p-1'> 
                <ul style={{listStyle: "none"}}>
                    <li>
                        <StyledLink href="https://chromewebstore.google.com/detail/notate/iblgligkiffmjapcipbaiogjfhnlaako?hl=en"> 
                            <b> notate</b>, annotate any webpage
                        </StyledLink>
                    </li>
                    <li>
                        <b> billy</b>, stealth
                    </li>
                </ul>
            </h4>
        </div>
    )
}
export default Work