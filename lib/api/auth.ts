import { setToken } from 'lib/util/token';
import axios from 'axios';

export const fetchSignup = (data: object) => {
    axios.post(`http://localhost:8080/users/create`, data)
        .then((data) => {
            if (!data.data) {
                alert('회원가입에 실패했습니다. 다시 시도해주세요.')
                return
            } else {
                alert(data.data.message)
                setToken(data.data.token)
                return
            }
        })
        .catch(() => {
            return
        })
}