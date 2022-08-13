import React, { useEffect } from 'react';
import { Todo } from 'components/todo'
import { useRouter } from 'next/router';
import { getToken } from 'lib/util/token';

const Index = () => {
    const router = useRouter()
    const token = getToken()

    useEffect(() => {
        if (!token) {
            alert('토큰이 유효하지 않습니다.')
            router.push('/')
        }
    }, [])

    return (
        <>
            {
                (token !== null) &&
                <Todo />
            }
        </>

    );
};

export default Index;