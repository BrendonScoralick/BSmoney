import logoimg from '../../assets/Logo.svg'
import { Container, Content } from './styles'


export function Header() {

    return (

        <Container>
            <Content>
                <img src={logoimg} alt="BSmoney" />
                <button type='button'> Nova transação </button>
            </Content>
        </Container>

    )
};