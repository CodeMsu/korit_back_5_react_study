import { css } from "@emotion/react";

export const layout = (isShow) => css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: ${isShow ? 0 : -80}px;
    right: 0px;
    z-index: 99;
    border-bottom:1px solid #dbdbdb;
    width: 50%;
    height: 80px;
    background-color: white;
    box-shadow: 1px 0px 2px #00000022;
    transition: top 0.5s ease-in-out;
`;



export const toggleButton = css`
    display:  flex;
    position: absolute;
    top: 80px;
    right: 10px;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    right: 20px;
    width: 50px;
    height: 20px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #aaa;
    }
`;
export const menuList = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const menuItem = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dbdbdb;
    padding: 10px 30px;
    width: 100px;
    height: 20px;
    color: black;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:nth-of-type(2) {
        margin: 0px 20px;
    }
    &:hover {
        background-color: #eee;
    }
    &:active {
        background-color: #dbdbdb;
    }
`;
