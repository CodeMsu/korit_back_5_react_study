import { css } from "@emotion/react";

export const layout = css`
    background-image: url(https://mblogthumb-phinf.pstatic.net/MjAyMDAxMjhfODAg/MDAxNTgwMTM3MjQ5OTY0.v9B5sXkqp1pEaCZxseS0c-8AVsqoT7zUaJ3bhSDs9Tsg.4WP0Lgb2bwZ5MnI8q2Rs5a7gxDLUZ5Wn6UdY-lCQu7kg.PNG.kgo3591/7.PNG?type=w800);
    background-repeat: no-repeat;
    background-position: 340px 148px;
    background-size: 320px 320px;
    padding: 100px 30px 0px;
`;
export const profileHeader = css`
    box-sizing: border-box;
    margin: 0px auto 20px;
    padding: 30px;
    border: 1px solid #dbdbdb;
    width: 700px;
`;
export const title = css`
    margin-bottom: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 700;
`; 
export const profileImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto 20px;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    cursor: pointer;
    & > img {
        width: 100%;
    }
`;
export const nicknameLayout = css`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;
export const nickname = css`
    box-sizing: border-box;
    outline: none;
    border: none;
    border-bottom: 2px solid #dbdbdb;
    padding: 5px 10px 0px;
    width: 200px;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;

    &:focus {
        border-bottom: 2px solid #bbb;
        background-color: #fafafa;
    }
`;
export const profileInputLayout = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0px auto 20px;
    border: 1px solid #dbdbdb;
    padding: 10px;
    width: 700px;
`;
export const inputBox = css`
    position: relative;
    margin-bottom: 10px;
`;
export const profileInput = css`
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 20px 20px 10px;
    font-size: 16px;

    width: 335px;
    &:nth-of-type(3n), &:nth-of-type(4n) {
        margin: 0;
    }
    &:focus {
        outline: 2px solid #5dd6ff;
    }
    /* &+ : 인접형제 선택자 */
    &+label {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        left: 23px;
        color: #333;
        font-weight: 600;
        transition: all 0.2s ease-in-out;
    }

    &:focus + label, &:not(:placeholder-shown) +label {
        top: 15px;
        left: 23px;
        font-size: 11px;
    }
`;
export const buttonLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const profileButton = css` // button,input은 패딩으로만 width,height 조절
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    padding: 10px 20px;
    width: 700px;
    background-color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    &:hover {                   // 항상 호버가 액티브보다 연하게.
        background-color: #fafafa;
    }
    &:active {
        background-color: #eeeeee;
    }
`;