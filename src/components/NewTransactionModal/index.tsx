import Modal from "react-modal";
import { Container, RadioBox, TransactonTypeContainer } from "./styles";
import closeimg from '../../assets/Vector.svg';
import entradaimg from '../../assets/Entradas.svg';
import saidaimg from '../../assets/Saídas.svg';
import { useState, FormEvent } from "react";
import { api } from "../services/api";

interface NewTransactionModalProps {

    isOpen: boolean;
    onRequestClose: () => void;


}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');

    const [type, setType] = useState('deposit');




    function handleCreateNewTransaction(event: FormEvent) {

        event.preventDefault();

        const data = {
            title,
            value,
            type,
            category
        }

        api.post('/transactions', data);

    }


    return (



        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={closeimg} alt="CloseModal" />
            </button>
            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />
                <input type="number" placeholder="Valor"
                    value={value}
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactonTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => { setType('deposit'); }}
                        isActive={type === 'deposit'}
                        activeColor='green'
                    >
                        <img src={entradaimg} alt="entrada" />
                        <span>Receita</span>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => { setType('withdraw'); }}
                        isActive={type === 'withdraw'}
                        activeColor='red'
                    >
                        <img src={saidaimg} alt="entrada" />
                        <span>Despesa</span>
                    </RadioBox>
                </TransactonTypeContainer>

                <input placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal >

    );
}