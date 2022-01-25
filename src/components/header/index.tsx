import logoimg from '../../assets/Logo.svg'
import { Container } from './styles'


export function Header() {

    return (

        <Container>
            <img src={logoimg} alt="BSmoney" />
            <button type='button'> Nova transação </button>
        </Container>

    )
};