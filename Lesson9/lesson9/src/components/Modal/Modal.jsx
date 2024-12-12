import { createPortal } from "react-dom";
import "./Modal.css";
import { useEffect, useRef, useState } from "react";
export default function Modal({ children, isOpen, setOpen}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [form, setForm] = useState({name: '', email: '', phone:''});
    
    const dialog = useRef(null);

    useEffect(()=>{
        if(isOpen){
            dialog.current.showModal();
        }else{
            dialog.current.close();
        }
    },[isOpen])

    function handleClose(){
        setOpen(false);
        dialog.current.close()
    }

    function handleButtonClick(){
        console.log(name,email,phone);
        console.log(form);
    }

    function handleFormNameChange(e){
        setForm((states)=>({...states, name: e.target.value}))
    }
    function handleFormEmailChange(e){
        setForm((states)=>({...states, email: e.target.value}))
    }
    function handleFormPhoneChange(e){
        setForm((states)=>({...states, phone: e.target.value}))
    }

  return createPortal(
    <dialog ref={dialog}>
      <h4 className="modal-title">Оставьте контакты мы с вами свяжемся</h4>
      <form className="modal-form">
        <input type="text" placeholder="Имя" value={form.name} onChange={handleFormNameChange}/>
        <input type="text" placeholder="email" value={form.email} onChange={handleFormEmailChange}/>
        <input type="text" placeholder="phonenumber" value={form.phone} onChange={handleFormPhoneChange}/>
        <div onClick={handleButtonClick}>Отправить</div>
      </form>
      <button onClick={handleClose}>X</button>
    </dialog>,
    document.getElementById("modal")
  );
}
