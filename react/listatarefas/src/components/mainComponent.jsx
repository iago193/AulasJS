import React, { useState } from "react";
import './mainComponent.css';

//icons
import { IoMdCreate, IoMdTrash } from "react-icons/io";

function MainComponente() {
    const [tarefa, setTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();

        if (tarefa.trim() === "") return;

        console.log(tarefa);

        setTarefas([...tarefas, tarefa]);
        setTarefa("");
    }

    return (
        <div className="container">
            <div className="main">
                <h1>lista de tarefas</h1>

                <form onSubmit={handleSubmit} action="#">
                    <input type="text"
                        value={tarefa}
                        onChange={e => setTarefa(e.target.value)}
                    />
                    <button type="submit">Confirm</button>
                </form>

                <ul>
                    {tarefas.map((tarefa, indice) => (
                        <li key={indice}> {tarefa} 
                            <div className="btn-list">
                                <button className="btn-edit" type="button">< IoMdCreate /></button>
                                <button className="btn-delet" type="button">< IoMdTrash /></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MainComponente;
