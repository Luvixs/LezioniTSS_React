import { useState } from "react";

const initialState = {
    description: '',
    date: '',
    time: '',
}
                        //onFormSubmit
function FormToDoList({ addToDo }) {
    const [formToDo, setFormToDo] = useState(initialState);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormToDo( {
            ...formToDo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       // onFormSubmit(formToDo);

       const todo = {
        id: Math.ceil(Math.random()),
        description: formToDo.description,
        date: formToDo.date,
        time: formToDo.time
       }

       addToDo(todo)
       setFormToDo(initialState);
    };
    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Cosa vuoi fare
                        <input
                            type="text"
                            name="description"
                            value={formToDo.description}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                

                <div>
                    <label>
                        Giorno
                        <input
                            type="date"
                            name="date"
                            value={formToDo.date}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Orario
                        <input
                            type="time"
                            name="time"
                            value={formToDo.time}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                <div>
                    <button type="submit">Invia</button>
                </div>
            </form>
        </div>
    )
}

export default FormToDoList;