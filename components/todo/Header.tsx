import { delToken, getToken } from 'lib/util/token';
import { useRouter } from 'next/router';
import * as T from 'lib/styles/todoStyle';

const Header = () => {
    const router = useRouter()
    const token = getToken()

    const logout = () => {
        delToken()
        alert('로그아웃 되었습니다.')
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