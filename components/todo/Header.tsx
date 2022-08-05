import { delToken, getToken } from 'lib/util/token';
import { useRouter } from 'next/router';
import * as T from 'lib/styles/todoStyle';

const Header = () => {
    const router = useRouter()

    if (!getToken()) {
        alert('토큰이 유효하지 않습니다.')
        router.push('/auth')
    }
    const logout = () => {
        delToken()
        router.push('/auth')
    }

    return (
        <T.Header>
            <p>Todo App</p>
            <button onClick={logout}>로그아웃</button>
        </T.Header>
    );
};

export default Header;