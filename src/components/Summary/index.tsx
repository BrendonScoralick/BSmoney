import EntradasImg from '../../assets/Entradas.svg'
import SaidasImg from '../../assets/Saídas.svg'
import TotalImg from '../../assets/Total.svg'
import { Container } from './styles'

export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt="Entradas" />
                </header>
                <strong>R$ 1000,00</strong>

            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={SaidasImg} alt="Saídas" />
                </header>
                <strong>R$ 500</strong>

            </div>
            <div className='highlightBg'>
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>R$ 500</strong>

            </div>
        </Container>
    );
}