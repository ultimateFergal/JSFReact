import styled from '../styled.components/index.js'
import { component as Component} from '../react/index.js'

// The styled component, content inside backtips is the arguments of the fn
const TitleStyled = styled.h1`
    color: red;
    font-family: system-ui;
    color: orange;
    font-size: 50px;
    text-shadow: 2px 2px 0 black;
    line-height: 100vh;
`

const props = {
    message: `Don't give up`,
    name: 'Fergal',
}


const user = Component`------ ${'message'} ----- ${'name'}`(props) // props.name, props.message
// const Title = component`------ ${'message'} ----- ${'name'}`(props)
const Title = Component`<marquee>${'message'} </marquee>`(props) // props.name, props.message

export default TitleStyled(Title)