import styled from 'styled-components'

/* header */
export const TitleBox = styled.div`
width: 100%; 
height: 48px; 
margin: 0 0 32px; 
padding:16px 0; 
box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.16); 
position: relative; 
text-align: center;
`
export const Before = styled.span`
font-size: 16px;
position:absolute; 
top:16px; 
left:20px;
`
export const Title = styled.span`
width: 82px;
height: 22px;
font-family: NotoSans;
font-size: 16px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.38;
letter-spacing: -0.4px;
text-align: left;
color: #222;
`

/* common */
export const SubTitleBox = styled.div`
text-align: left;
`
export const SubTitleBoxCenter = styled(SubTitleBox)`
margin-bottom: 24px;
text-align: center;
`
export const SubTitle = styled.p`
margin-bottom:4px;
font-family: NotoSans;
font-size: 18px;
font-weight: bold;
line-height: 1.33;
letter-spacing: -0.45px;
color: #222;
`
export const SubTitleComment = styled.span`
font-family: NotoSans;
font-size: 15px;
font-weight: bold;
line-height: 1.33;
letter-spacing: -0.38px;
color: #222;
`
export const InputWrap = styled.div`
margin: 40px 0 24.5px; 
position: relative;
`
export const InputWrapMT = styled(InputWrap)`
margin-top: 9px
`
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
export const AuthInput = styled.input`
width: 224px;
height: 34.5px;
margin-right: 15px;
border: none;
border-bottom: solid 1px #ababab;
border-radius: 0;
padding: 10.5px 4.5px 4.5px;
font-size: 13px;
font-weight: bold;
color:#222;
`
export const AuthTime = styled.span`
position:absolute;
top:124px;
right:97px;
font-family: NotoSans;
font-size: 13px;
line-height: 1.38;
letter-spacing: -0.33px;
color: #f96726;
`
export const AuthButton = styled.button`
width: 76px;
height: 34px;
padding: 9px 13px 8px 12px;
border-radius: 6px;
border:none;
background-color: #ffe2e2;
font-family: NotoSans;
font-size: 13px;
line-height: 1.38;
letter-spacing: -0.33px;
color: #787878;
`
export const AuthButtonSpan = styled.span<{ authYn: boolean }>`
font-family: NotoSans;
font-size: 13px;
line-height: 1.38;
letter-spacing: -0.33px;
text-align: left;
color: ${({ authYn }) => authYn ? '#9e9e9e' : '#787878'};
`
export const AlertBox = styled.div`
text-align: left;
width:320px;
padding: 0 4px;
`
export const AlertText = styled.p<{ alertType: string }>`
font-family: NotoSans;
font-size: 12px;
color: ${({ alertType }) => alertType === 'error' ? '#ff0000' : '#2a78ff'};
text-align: left;
margin:4px 4px 0;
`
export const LinkBox = styled.div`
height: 17px;
margin: 4px;
font-family: NotoSans;
font-size: 12px;
letter-spacing: -0.3px;
color: #707070;
`
export const GreenSpan = styled.span`
color:#39a114;
`
export const LinkSpan = styled.span`
font-family: NotoSans;
font-size: 12px;
line-height: 1.42;
letter-spacing: -0.3px;
text-align: left;
color: #707070;
vertical-align: middle;
cursor: pointer;
`
export const RedButton = styled.div`
width: 320px;
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
width: 320px;
padding: 187px 0px 137px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
`
export const LogoWrap = styled.div`
text-align: center
`
export const LogoSpan = styled.span`
width: 100%;
height: 33px;
font-family: NotoSans;
font-size: 24px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 1.38;
letter-spacing: -0.6px;
color: #f96726;
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
export const NonLoginWrap = styled.div`
height: 17px;
width: fit-content;
margin: auto;
font-family: NotoSans;
font-size: 12px;
letter-spacing: -0.3px;
text-align: left;
color: #222;
`
export const Signup = styled.span`
width: 47px;
cursor: pointer;
`
export const Vertical = styled.span`
margin: 0 12.5px;
position: relative;
top: -1.5px;
`

/* signup */
export const SignupContent = styled.div`
width: 500px;
height: auto;
padding: 102px 90px;
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
width: 320px;
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
export const CommonSignupWrap = styled(SignupWrap)`
height: max-content;
top:50%;
transform: translateX(-50%) translateY(-50%);
`
export const SignSubWrap = styled.div`
width: 100%;
margin: 0 0 29px;
`
export const CompleteGrid = styled.div`
margin: 40px 0 24.5px;
display: grid;
grid-template-columns: 91px 229px;
grid-template-rows: 46px 46px 46px;
border-top: 2px solid #f96726;
font-family: NotoSans;
font-size: 13px;
line-height: 1.38;
letter-spacing: -0.33px;
text-align: left;
color: #222;
`
export const CompleteGridTh = styled.div`
padding: 14px 12px;
display: inline-grid;
background-color: #efefef;
border-bottom: 1px solid #ababab;
`
export const CompleteGridTd = styled.div`
padding: 14px 8px;
display: inline-grid;
font-weight: bold;
border-bottom: 1px solid #ababab;
`
export const SelectBox = styled.select`
width: 100%;
height: 48px;
padding: 15px 10px;
border-radius: 6px;
border: solid 1px #ababab;
option{
    border: solid 1px #ababab;
}
`
export const InfoIcon = styled.div`
width: 16px;
height: 16px;
position: absolute;
right: 165px;
top: 16px;
background: url('/images/info.png')
`
export const InfoLayer = styled.div`
height: 32px;
padding:8px;
position: absolute;
top: 42px;
left: 46px;
border-radius: 6px;
background-color: #ebebeb;
font-size: 12px;
color: #222;
:after{
    content:"";
    border-top:0px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 9px solid #ebebeb;
    position: absolute;
    top: -8px;
    left: 93px;
}
`