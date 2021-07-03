import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NumberContainer = styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover {
        cursor: pointer;
        background: gray;
        transition: 0.4s ease;
        border-radius: 10px;
    }
`;

export const NumberFollowers = styled.h1`
    font-size: 20px;
    text-align: center;
    color: #444;
`;

export const TextNumbers = styled.h2`
    font-size: 12px;
    text-align: center;
    color: #777;
`;
