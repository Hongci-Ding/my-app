import {useState} from 'react';
import Backdrop from './Backdrop';
import MapModal from './MapModal';

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function deleteHandler(){
        setModalIsOpen(true);
    }
    function closeModalHandler(){
        setModalIsOpen(false);
    }
    // document.querySelector('button').addEventListener('click');
    return (
        <div className="card">
            <div className='container'>
                <h2>{props.text}</h2>
                <div>
                <button className="button" onClick={deleteHandler}>Delete</button>              
                </div>
            </div>
            {modalIsOpen&&<MapModal></MapModal>}
            {modalIsOpen&&<Backdrop onClick={closeModalHandler}></Backdrop>}
        </div>
    );
}
export default Todo;