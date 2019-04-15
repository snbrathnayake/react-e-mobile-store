import styled from 'styled-components';

// capitalizes : the first letter of each word in the selected text
export const Button = styled.button`
    text-transform:capitalize; 
    font-size:1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${props => props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${props => props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 0.3rem;
    padding: 0.2rem 0.5rem;
    cursor:pointer;
    margin: 0.2rem 0.5rem 0.2rem 0.0rem;

    &:hover {
        background:${props => props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
        color:var(--mainBlue);
    }
    &:focus {
        outline:none;
    }
`;