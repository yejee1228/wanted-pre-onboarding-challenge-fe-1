import React from 'react';
import { Auth } from 'components/auth'
import { getToken } from 'lib/util/token';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()
    if (getToken()) {
        router.push('/todo')
    }
    return (
        <Auth />
    );
};

export default Index;