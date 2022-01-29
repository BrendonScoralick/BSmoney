import Modal from "react-modal";
import { Container, RadioBox, TransactonTypeContainer } from "./styles";
import closeimg from '../../assets/Vector.svg';
import entradaimg from '../../assets/Entradas.svg';
import saidaimg from '../../assets/Saídas.svg';
import { useState } from "react";

interface NewTransactionModalProps {

    isOpen: boolean;
    onRequestClose: () => void;


}


export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

    const [type, setType] = useState('deposit');

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
            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder="Título" />
                <input type="number" placeholder="Valor" />

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

                <input placeholder="Categoria" />
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal >

    );
}