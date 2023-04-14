import { ParentComponent, createSignal } from 'solid-js';

import './Modal.css'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: ParentComponent<ModalProps> = (props) => {
    const [isModalOpen, setIsModalOpen] = createSignal(props.isOpen);

    const handleCloseModal = () => {
        setIsModalOpen(false);
        props.onClose();
    };

    return (
        <div class={`modal ${isModalOpen() ? 'is-active' : ''}`}>
            <div class="modal-background" onClick={handleCloseModal} />
            <div class="modal-content">
                {/* Здесь вы можете настроить содержимое модального окна */}
                {props.children}
            </div>
            <button class="modal-close is-large" 
                aria-label="close" 
                onClick={handleCloseModal} />
        </div>
    );
};

export default Modal;