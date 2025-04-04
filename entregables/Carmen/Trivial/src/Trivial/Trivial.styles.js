import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
        font-size: 1.5rem;
		font-family: Arial, Helvetica, sans-serif;
	}
`;
export const Test = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    width: auto;
`;
export const AnswersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
`;

export const AnswerCard = styled.label`
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: #fff;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    cursor: pointer;
    transition: transform 0.2s ease;

&:hover {
    transform: scale(1.05);
	box-shadow: 0px 4px 12px #E91E23;
}

input {
    margin-right: 0.5rem;
}
`;
