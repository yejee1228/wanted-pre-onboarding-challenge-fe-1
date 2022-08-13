import styled from 'styled-components'

export const Header = styled.div`
width: 100%;
height: 70px;
position: relative;
box-shadow: 0 1px 6px 0 rgb(0 0 0 / 16%);
    p{
        text-align: center;
        font-size: 2em;
        font-weight: bold;
        color: #f96726;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    button{
        width: 70px;
        height: 25px;
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #fff;
        border: 1px solid #f96726;
        border-radius: 6px;
        color: #f96726;
    }
`
export const TodoWrap = styled.div`
width: 480px;
position: absolute;
left: 50%;
top: 10%;
transform: translate(-50%, 0%);
`
export const TodoAddButton = styled.button`
width: 80%;
height: 50px;
margin: 0 auto 10px ;
color: #fff;
background-color: #f96726;
border: none;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
`
export const TodoForm = styled.form`
width: 100%;
padding: 20px;
margin-bottom: 40px;
border: 1px solid #999;
border-radius: 6px;
display: flex;
flex-direction: column;
    p{
        float: left;
        height: 48px;
        padding: 12px 0;
    }
    input {
        width: 90%;
        height: 48px;
        padding: 15px 12px;
        margin-bottom: 15px;
        border: solid 1px #ababab;
        border-radius: 6px;
        float: right;
    }
    textarea{
        width: 100%;
        height: 100px;
        padding: 15px 12px;
        margin-bottom: 15px;
        border: solid 1px #ababab;
        border-radius: 6px;
        resize: none;
    }
    button {
        width: 20%;
        height: 48px;
        margin: 0 auto;
        padding: 9px 13px 8px 12px;
        border: none;
        border-radius: 6px;
        color: #fff;
        background-color: #f96726;
        font-family: NotoSans;
        font-size: 16px;
    }
`
export const TodoList = styled.article`
width: 100%;
padding: 20px;
margin-bottom: 15px;
position: relative;
border: 1px solid #dcdcdc;
border-radius: 6px;
`
export const TodoItem = styled.li`
width: auto;
height: 48px;
padding: 3px 10px;
margin-bottom: 5px;
display: flex;
align-items: center;
position: relative;
border: 1px solid #ececec;
border-radius: 6px;
&:last-child{
    margin-bottom: 0px;
}
span{
    width: 350px;
    height: 24px;
    margin: 5px 10px;
    padding: 0;
    font-size: 15px;
    text-overflow: ellipsis;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    &:last-child{
        width: 200px;
    }
}
`
export const TodoDetail = styled(TodoForm)`
width: auto;
border: 1px solid #f96726;
margin-bottom: 10px;
    div{
        h3{
            font-size: 20px;
            font-weignt: bold;
            border-bottom: 1px solid #ececec;
            padding: 10px;
        }
        div{
            text-align: left;
            padding: 10px;
            height: 133px;
            overflow: auto;
        }
    }
`
export const ButtonBox = styled.div`
text-align: center;
    button{
        margin: 0 20px
    }
`