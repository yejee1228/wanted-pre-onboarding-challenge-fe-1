import styled from 'styled-components'

export const InputBox = styled.div`
position: relative;
margin: 0 0 8px;
`
export const Input = styled.input<{ error: boolean }>`
width: 100%;
height: 48px;
padding: 15px 12px;
border-radius: 6px;
border: ${({ error }) => error ? 'solid 1px #ff0000' : 'solid 1px #ababab'};
background-color: ${({ error }) => error ? '#ffe2e2' : 'none'};
`
export const InputIcon = styled.div`
width: 18px;
height: 18px;
position: absolute;
color: #cccccc;
right: 12px;
top: 15px;
`
export const AlertText = styled.p<{ alertType: string }>`
font-family: NotoSans;
font-size: 12px;
color: ${({ alertType }) => alertType === 'error' ? '#ff0000' : '#2a78ff'};
text-align: left;
margin:4px 4px 0;
`
export const RedButton = styled.div`
max-width: 320px;
width: 100%;
height: 48px;
margin-bottom: 18px;
padding: 10px 0;
border-radius: 25px;
background-color: #f96726;
text-align: center;
cursor: pointer;
`
export const RedButtonSpan = styled.span`
color: #ffffff;
font-size: 16px;
`
export const GrayButton = styled(RedButton)`
background-color: #eee;
cursor: none;
`
export const WhiteButton = styled(RedButton)`
background: none;
border: solid 1px #f96726;
`
export const WhiteButtonSpan = styled(RedButtonSpan)`
color: #222;
`

/* login */
export const LoginWrap = styled.div`
max-width: 320px;
width: 100%;
padding: 187px 10px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`
export const Title = styled.p`
width: 100%;
height: 61px;
margin-bottom: 63px;
font-family: NotoSans;
font-size: 40px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.38;
letter-spacing: -0.6px;
color: #f96726;
text-align: center;
`
export const LoginContent = styled.div`
margin-top: 24px;
margin-bottom: 16px;
`
export const Error = styled.span`
font-family: NotoSans;
font-size: 12px;
color: #ff0000;
margin: 4px 24px 0 4px;
`
export const LoginSpan = styled.span`
font-size: 16px;
color: #fff;
`

/* signup */
export const SignupContent = styled.div`
max-width: 500px;
width: calc(100% - 20px);
height: auto;
padding: 102px 10px;
text-align: -webkit-center;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background: #ffffff;
border-radius: 15px;
z-index: 9999;
`
export const ClosePopup = styled.div`
width: 20px;
height: 20px;
position: absolute;
right: 20px;
top: 20px;
svg{
    width: 20px;
    height: 20px;
    color: #cccccc;
}
`
export const SignupWrap = styled.div`
max-width: 320px;
width: 100%;
height: 100%;
text-align:center;
`
export const SignupBackground = styled.div`
width: 100%;
height: 100%;
position: absolute;
background-color: #1f29372e;
z-index:100;
`
export const SignSubWrap = styled.div`
width: 100%;
margin: 0 0 29px;
`