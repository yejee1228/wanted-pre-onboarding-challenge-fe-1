import React, { useEffect, useRef, useState } from 'react'
import * as A from 'lib/styles/accountStyle';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setSignupState, setUser } from 'lib/store/modules/user.module';
import * as regExp from 'lib/util/regExp';
import { useRouter } from 'next/router';
import { MdOutlineCancel } from 'react-icons/md';
import axios from 'axios';
import { setToken } from 'lib/util/token';

const Index = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const [state, setState] = useState(true)

    const [inputs, setInputs] = useState({
        email: '',
        memberName: '',
        password: '',
        passwordCheck: '',
    });
    const { email, memberName, password, passwordCheck } = inputs
    const [passWordType, setPassWordType] = useState('password')
    const [passwordCheckType, setPasswordCheckType] = useState('password')
    const [emailError, setEmailError] = useState('')
    const [passWordError, setPassWordError] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value,
        })
    }

    useEffect(() => {
        dispatch(setSignupState(state))
    }, [dispatch, state])

    useEffect(() => {
        if (email !== '' && !regExp.checkRegExp(email, regExp.emailRegExp)) {
            setEmailError('이메일 형식이 아닙니다.')
        } else {
            setEmailError('')
        }
        if (password !== '' && password.length < 8) {
            setPassWordError('8자리 이상 입력해주세요.')
        } else if (passwordCheck !== '' && password !== passwordCheck) {
            setPassWordError('비밀번호가 일치하지 않습니다.')
        } else {
            setPassWordError('')
        }
    }, [email, memberName, password, passwordCheck])

    const changePwType = (type: string) => {
        if (type === 'password') {
            passWordType === 'password' ? setPassWordType('text') : setPassWordType('password')
        } else {
            passwordCheckType === 'password' ? setPasswordCheckType('text') : setPasswordCheckType('password')
        }
    }

    const signupValidate = () => {
        if (email == '') {
            setEmailError('이메일을 입력해주세요.')
            return
        } else if (password == '') {
            setPassWordError('비밀번호를 입력해주세요.')
            return
        } else if (passwordCheck == '') {
            setPassWordError('비밀번호를 한번 더 입력해주세요.')
            return
        } else {
            return true
        }
    }

    const signup = () => {
        if (signupValidate()) {
            axios.post(`http://localhost:8080/users/create`, inputs)
                .then((data) => {
                    if (!data.data) {
                        alert('회원가입에 실패했습니다. 다시 시도해주세요.')
                        return
                    } else {
                        alert(data.data.message)
                        setPassWordError('')
                        setEmailError('')
                        setToken(data.data.token)
                        dispatch(setUser(inputs))
                        setState(false)
                        router.push('/')
                        return
                    }
                })
                .catch(() => {
                    return
                })
        }
    }

    return (
        <>
            <A.SignupContent>
                <A.ClosePopup onClick={() => setState(false)}><MdOutlineCancel /></A.ClosePopup>
                <A.SignupWrap>
                    <A.SignSubWrap>
                        <A.InputBox>
                            <A.Input type='email' name='email' value={email} placeholder='이메일 주소' onChange={handleInput} ref={inputRef} error={emailError !== ''} />
                            {emailError !== '' && <A.AlertText alertType='error'>{emailError}</A.AlertText>}
                        </A.InputBox>
                        <A.InputBox>
                            <A.Input type={passWordType} name='password' value={password} placeholder='비밀번호' onChange={handleInput} error={passWordError !== ''} maxLength={12} />
                            {
                                passWordType === 'password'
                                    ? <A.InputIcon onClick={() => changePwType('password')}> <AiFillEyeInvisible /> </A.InputIcon>
                                    : <A.InputIcon onClick={() => changePwType('password')}> <AiFillEye /> </A.InputIcon>
                            }
                        </A.InputBox>
                        <A.InputBox>
                            <A.Input type={passwordCheckType} name='passwordCheck' value={passwordCheck} placeholder='비밀번호 확인' onChange={handleInput} error={passWordError !== ''} maxLength={12} />
                            {
                                passwordCheckType === 'password'
                                    ? <A.InputIcon onClick={() => changePwType('passwordCheck')}> <AiFillEyeInvisible /> </A.InputIcon>
                                    : <A.InputIcon onClick={() => changePwType('passwordCheck')}> <AiFillEye /> </A.InputIcon>
                            }
                            {passWordError !== '' && <A.AlertText alertType='error'>{passWordError}</A.AlertText>}
                        </A.InputBox>
                    </A.SignSubWrap>
                    <A.RedButton onClick={signup}>
                        <A.RedButtonSpan>회원가입</A.RedButtonSpan>
                    </A.RedButton>
                </A.SignupWrap>
            </A.SignupContent>
            <A.SignupBackground />
        </>
    );
};

export default Index;
