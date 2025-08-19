import React, { useState, useEffect } from "react";
import Form from "./Form";
import Ul from "./Task";
import './mainComponent.css';

function MainComponente() {
    // Estado tarefas, carregando do localStorage na inicialização
    const [tarefas, setTarefas] = useState(() => {
        const tarefasSalvas = localStorage.getItem("tarefas");
        return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
    });

    // Salva tarefas no localStorage sempre que elas mudarem
    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }, [tarefas]);

    // Estado para o input da nova tarefa
    const [tarefa, setTarefa] = useState("");

    // Estados para edição
    const [editandoIndice, setEditandoIndice] = useState(null);
    const [editandoTexto, setEditandoTexto] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (tarefa.trim() === "") return;

        if (tarefas.indexOf(tarefa) !== -1) {
            alert(`Tarefa ${tarefa} já existe.`);
            return;
        }

        setTarefas([...tarefas, tarefa]);
        setTarefa("");
    }

    const deletTarefa = (indice) => {
        setTarefas(tarefas.filter((_, i) => i !== indice));
    }

    const iniciarEdicao = (indice) => {
        setEditandoIndice(indice);
        setEditandoTexto(tarefas[indice]);
    }

    const salvarEdicao = () => {
        if (editandoTexto.trim() === "") {
            alert("A tarefa não pode ficar vazia");
            return;
        }

        const novasTarefas = [...tarefas];
        novasTarefas[editandoIndice] = editandoTexto;
        setTarefas(novasTarefas);

        setEditandoIndice(null);
        setEditandoTexto("");
    }

    const cancelarEdicao = () => {
        setEditandoIndice(null);
        setEditandoTexto("");
    }

    return (
        <div className="container">
            <div className="main">
                <h1>lista de tarefas</h1>

                <Form
                    tarefa={tarefa}
                    setTarefa={setTarefa}
                    handleSubmit={handleSubmit}
                />

                <Ul
                    tarefas={tarefas}
                    editandoIndice={editandoIndice}
                    editandoTexto={editandoTexto}
                    setEditandoTexto={setEditandoTexto}
                    iniciarEdicao={iniciarEdicao}
                    salvarEdicao={salvarEdicao}
                    cancelarEdicao={cancelarEdicao}
                    deletTarefa={deletTarefa}
                />


            </div>
        </div>
    );
}

export default MainComponente;
