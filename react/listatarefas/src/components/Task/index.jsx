import React from "react";
import PropTypes from 'prop-types';
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import './Task.css';

function Task({
  tarefas,
  editandoIndice,
  editandoTexto,
  setEditandoTexto,
  iniciarEdicao,
  salvarEdicao,
  cancelarEdicao,
  deletTarefa
}) {
  return (
    <ul>
      {tarefas.map((tarefaItem, indice) => (
        <li key={indice}>
          {editandoIndice === indice ? (
            <>
              <input
                type="text"
                value={editandoTexto}
                onChange={e => setEditandoTexto(e.target.value)}
                onKeyDown={e => {
                  if (e.key === "Enter") salvarEdicao();
                  if (e.key === "Escape") cancelarEdicao();
                }}
                autoFocus
              />
              <button onClick={salvarEdicao} type="button">Salvar</button>
              <button onClick={cancelarEdicao} type="button">Cancelar</button>
            </>
          ) : (
            <>
              {tarefaItem}
              <div className="btn-list">
                <button
                  className="btn-edit"
                  onClick={() => iniciarEdicao(indice)}
                  type="button"
                >
                  <IoMdCreate />
                </button>
                <button
                  className="btn-delet"
                  onClick={() => deletTarefa(indice)}
                  type="button"
                >
                  <IoMdTrash />
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

Ul.propTypes = {
  tarefas: PropTypes.arrayOf(PropTypes.string).isRequired,
  editandoIndice: PropTypes.number,
  editandoTexto: PropTypes.string,
  setEditandoTexto: PropTypes.func.isRequired,
  iniciarEdicao: PropTypes.func.isRequired,
  salvarEdicao: PropTypes.func.isRequired,
  cancelarEdicao: PropTypes.func.isRequired,
  deletTarefa: PropTypes.func.isRequired,
};

export default Task;
