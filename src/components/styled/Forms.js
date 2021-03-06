import styled from 'styled-components'

const GeneralForm = styled.form.attrs(props => ({
    onSubmit: props.onSubmit 
}))`
    input[type=submit] {
        background: #990000;
        color: white;
        padding: 4px;
        width: 20%;
        border: 1px solid #990000;
        border-radius: 4px;
        font-family: inherit;
        height: 30px;
        cursor:pointer;
        margin: 10% 0 5% 40%;
    }
    input[type=submit]:hover{
        border-color: black;
        color: white;
        background-color: black;
    }

    input {
        font-family: inherit;
        font-size: 18px;
        width: 300px;
        margin: 10px;
        border-radius: 2px;
        outline: none; 
        padding: 0.5rem;
        box-shadow: none;
        margin: 0 auto;
        font-size: 1rem;
        display: table;
    }
`

export const FilterForm = styled(GeneralForm)`
    width: 50%;
    margin: 5% 0 0 10%;

    input {
        margin-left: 5%; 
        display: inline-block;
    }

    input[type=submit] {
        display: inline-block;
        width: 50%;
    }
    input[type=submit]:hover{
        border-color: white;
        color: black;
        background-color: white;
    }
`;

export const AuthForm = styled(GeneralForm)`
    border: 1px solid #ccc;
    width: 45%;
    margin: 0 auto;

    h1 {
        text-align: center;
    }
    label {
        display: inline-table;
    }

    input[type=submit] {
        
    }

    .header-form {
        height: 300px;
        width: 100%;
    }

`