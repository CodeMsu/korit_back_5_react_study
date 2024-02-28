/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { useRef, useState } from "react";

function Mypage() {
    const [ preview, setPriview ] = useState("");
    const imgFileRef = useRef();
    const handleImgFileChange = (e) => {
        const fileReader = new FileReader();

        if(e.target.files.length === 0) {
            return;
        }
        fileReader.onload = (e) => {
            setPriview(e.target.result);
        };

        fileReader.readAsDataURL(e.target.files[0]);
    }

    return (
        <div css={S.layout}>
            <div css={S.profileHeader}>
                <h1 css={S.title}>마이페이지</h1>
                <div css={S.profileImg} onClick={() => imgFileRef.current.click()}>
                <img src={preview} alt="" />
                <input style={{display: "none"}} type="file" ref={imgFileRef} onChange={handleImgFileChange}/>
            </div>
            <div css={S.nicknameLayout}>
            <input type="text" css={S.nickname} maxLength={20} /> 
            {/* maxLength: 글자수제한 */}
            </div>
        </div>
           <div css={S.profileInputLayout}>
                <div css={S.inputBox}>
                    <input type="text"  id="name" css={S.profileInput} placeholder=" "/>
                    <label htmlFor="name">성명</label>
                </div>
                <div css={S.inputBox}>
                    <input type="text"  id="birth" css={S.profileInput} placeholder=" "/>
                    <label htmlFor="birth">생년월일</label>
                </div>
                <div css={S.inputBox}>
                    <input type="text"  id="phone" css={S.profileInput} placeholder=" "/>
                    <label htmlFor="phone">연락처</label>
                </div>
                <div css={S.inputBox}>
                    <input type="text"  id="address" css={S.profileInput} placeholder=" "/>
                    <label htmlFor="address">주소</label>
                </div>
           </div>
           <div css={S.buttonLayout}>
                <button css={S.profileButton}>수정하기</button>
           </div>
        </div>
    );
}

export default Mypage;