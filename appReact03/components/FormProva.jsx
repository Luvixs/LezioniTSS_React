import { useState } from "react";



function FormProva({stampaUser}){

    const [user,setUser] = useState({
        nome:"",
        cognome:""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target;
// destructuring
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        
        stampaUser(user);
    }

    return(
        <>
        <div className="card">
            <form onSubmit={handleSubmit}>
                <label >Nome</label>
                <input
                type="text"
                name="nome"
                value={user.nome}
                onChange={handleChange}/>
                
                <label >Cognome</label>
                <input
                type="text"
                name="cognome"
                value={user.cognome}
                onChange={handleChange}/>
                <input type="submit" value="Invia" />
            </form>
        </div>
        
        </>
    )
}

export default FormProva