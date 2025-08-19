import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

function Form({ tarefa, setTarefa, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} action="#">
            <input
                type="text"
                value={tarefa}
                onChange={e => setTarefa(e.target.value)}
            />
            <button type="submit">Confirm</button>
        </form>
    );
}

Form.propTypes = {
    tarefa: PropTypes.string.isRequired,
    setTarefa: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};

export default Form;
