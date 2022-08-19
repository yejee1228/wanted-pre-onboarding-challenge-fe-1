import React, { useEffect, useState } from 'react';
import { Todo } from 'components/todo'
import { useRouter } from 'next/router';
import { getToken } from 'lib/util/token';

const Index = () => {
    const router = useRouter()
    const [isToken, setIsToken] = useState(false)

    useEffect(() => {
        if (getToken()) {
            setIsToken(true)
        } else {
            setIsToken(false)
            router.push('/')
            alert('토큰이 유효하지 않습니다.')
        }
    }, [])

    return (
        <>
            {
                isToken &&
                <Todo />
            }
        </>

    );
};

export default Index;