import React, { useState, useRef, useEffect } from 'react';
import * as A from 'lib/styles/accountStyle';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setSignupState } from 'lib/store/modules/user.module';
import { useLogin } from './queries';
import { setToken } from 'lib/util/token';

const Login = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const { email, password } = inputs
    const [passWordType, setPassWordType] = useState('password')
    const [emailError, setEmailError] = useState('')
    const [passWordError, setPassWordError] = useState('')
    const [loginError, setLoginError] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const { mutateAsync } = useLogin()

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const changePwType = () => {
        passWordType === 'password' ? setPassWordType('text') : setPassWordType('password')
    }

    const loginValidate = () => {
        setEmailError('')
        setPassWordError('')
        if (email == '') {
            setEmailError('이메일 주소를 입력해주세요.')
            return;
        } else if (email.indexOf('@') <= -1) {
            setEmailError('@를 포함한 이메일 주소를 입력해주세요.')
            return;
        } else if (password == '') {
            setPassWordError('비밀번호를 입력해주세요.')
            return;
        } else {
            return true;
        }
    }

    const doLogin = async () => {
        if (loginValidate()) {
            mutateAsync(inputs)
                .then((data) => {
                    if (!data) {
                        setLoginError('로그인에 실패하였습니다.')
                        return
                    } else {
                        alert(data.message)
                        setLoginError('')
                        setPassWordError('')
                        setEmailError('')
                        setToken(data.token)
                        router.push('/todo')
                        return
                    }
                })
                .catch((error) => {
                    const err = error as AxiosError
                    console.log(err)
                    return
                })
        }
    }
    useEffect(() => {
        router.prefetch('/')
    }, [])

    return (
        <A.LoginWrap>
            <A.Title>
                To-do List
            </A.Title>
            <A.LoginContent>
                <A.InputBox>
                    <A.Input type='email' name='email' value={email} placeholder='이메일 주소' onChange={handleInput} ref={inputRef} error={emailError !== ''} />
                    <A.InputIcon onClick={() => setInputs({ ...inputs, email: '' })}><MdCancel /></A.InputIcon>
                </A.InputBox>
                {emailError !== '' && <A.Error>{emailError}</A.Error>}
                <A.InputBox>
                    <A.Input type={passWordType} name='password' value={password} placeholder='비밀번호' onChange={handleInput} error={passWordError !== ''} />
                    {
                        passWordType === 'password'
                            ? <A.InputIcon onClick={changePwType}><AiFillEyeInvisible /></A.InputIcon>
                            : <A.InputIcon onClick={changePwType}><AiFillEye /></A.InputIcon>
                    }
                </A.InputBox>
                {passWordError !== '' && <A.Error>{passWordError}</A.Error>}
            </A.LoginContent>


            {(email !== '' && password !== '')
                ?
                <>
                    <A.RedButton onClick={doLogin}>
                        <A.LoginSpan>로그인</A.LoginSpan>
                    </A.RedButton>
                </>
                :
                <>
                    {loginError !== '' && <A.Error>{loginError}</A.Error>}
                    <A.GrayButton>
                        <A.LoginSpan>로그인</A.LoginSpan>
                    </A.GrayButton>
                </>
            }
            <A.WhiteButton onClick={() => dispatch(setSignupState(true))}>
                <A.WhiteButtonSpan>회원가입</A.WhiteButtonSpan>
            </A.WhiteButton>
        </A.LoginWrap>
    );
};

export default Login;