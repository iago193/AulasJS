import style from './Login.module.css';
import { login, logout } from '../../store/modules/auth/authSlice';
import { selectIsLogged } from '../../store/modules/auth/authSelectors';
import { useDispatch, useSelector } from 'react-redux';

function Login() {
    const dispatch = useDispatch();
    const isLogged = useSelector(selectIsLogged);

    return (
        <div className={style.container}>
            <h1>Hello world!</h1>

            {isLogged ? (
                <>
                    <p>Você está logado ✅</p>
                    <button onClick={() => dispatch(logout())}>Sair</button>
                </>
            ) : (
                <>
                    <p>Você NÃO está logado ❌</p>
                    <button onClick={() => dispatch(login())}>Entrar</button>
                </>
            )}

        </div>
    );
}

export default Login;
