import Form from "../Form"
import Modal from "../Modal"


const ChangeBalance = ({isModalOpen,setModalOpen,makeTransaction}) => {

    return (
        <Modal isOpen={isModalOpen} onClose={setModalOpen}>
            <Form handleSubmit={makeTransaction} setModalOpen={setModalOpen}/>
        </Modal>
    )
}

export default ChangeBalance