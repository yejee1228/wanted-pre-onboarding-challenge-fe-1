import React, { useEffect, useState } from 'react';
import { Auth } from 'components/auth'
import { getToken } from 'lib/util/token';
import { useRouter } from 'next/router';

const Index = () => {
    const [isToken, setIsToken] = useState(false)
    const router = useRouter()
    useEffect(() => {
        if (getToken()) {
            setIsToken(true)
        } else {
            setIsToken(false)
        }
    }, [])
    if (isToken) {
        router.push('/todo')
    } else {
        return (
            <Auth />
        );
    }
};

export default Index;