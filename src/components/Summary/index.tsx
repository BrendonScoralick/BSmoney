import { useContext } from 'react'
import EntradasImg from '../../assets/Entradas.svg'
import SaidasImg from '../../assets/Saídas.svg'
import TotalImg from '../../assets/Total.svg'
import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'

export function Summary() {
    const { transactions } = useTransactions();

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={EntradasImg} alt="Entradas" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.deposits)}</strong>

            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={SaidasImg} alt="Saídas" />
                </header>
                <strong>-{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraws)}</strong>

            </div>
            <div className='highlightBg'>
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Total" />
                </header>
                <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)}</strong>

            </div>
        </Container>
    );
}