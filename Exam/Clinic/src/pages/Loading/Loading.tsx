import { useNavigate } from "react-router-dom"

export default function(){
    const navigate = useNavigate()
    setTimeout(() => {
        navigate('/');
    }, 1);
    return (
        <>
            Loading...
        </>
    )
}