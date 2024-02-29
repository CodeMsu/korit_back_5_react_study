/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { RiArrowUpDoubleLine } from "react-icons/ri";

import { useMemo, useState } from 'react';
import { MENUS } from "../../constants/menu";

function DownBar() {
        const [isShow, setShow] = useState(false);
    
    return (
        <aside css={S.layout(isShow)}>
           <button css={S.toggleButton} onClick={() => setShow(!isShow)}>
                {isShow ? <RiArrowUpDoubleLine/> : <FaAngleDown/>}
           </button>
            <ul css={S.menuList}>
                {MENUS.map(menu => 
                <Link css={S.menuItem} to={`${menu.path}${!menu.params ? "" : "?" + Object.entries(menu.params).map(([key, value]) => key + "=" + value).join("&")} `} 
                 key={menu.id} 
                 onClick={() => setShow(false)}>
                      <li>{menu.name}</li>
                </Link>)}
            </ul> 
        </aside>
    );
}

export default DownBar;