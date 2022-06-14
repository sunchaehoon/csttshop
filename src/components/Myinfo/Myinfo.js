import React, {useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as S from './Styled.js';
import Header from '../Header/Header.js';
import './style.css';


export const userImg = {
    userPrf: "/img/user-1.png"
};

const Myinfo = () => {
    const navigate = useNavigate();
    //const profdet = document.querySelector(".profdet-li");
    const [isSelect, setToggle] = useState(false);

    let info = document.querySelector("#myinfo");
    let infoInf = document.querySelector("#myinfo-info");



    function InfoClick() {    
        info.style.display = "none";
        infoInf.style.visibility = "visible";
    }
    function BasketClick() {
        
    }
    function SelectClick() {
        return (
            <Select />
        );
    }
    function MyQnAClick() {
        return (
            <MyQnA />
        );
    }
    

    
    return (
        <>
            <S.Container>
                <Header />
                <S.MyContent>
                    <S.Prof>
                        <div className='userPrf'>
                            <img className='userPrf-prf' src='img/user-1.png' width='70' alt='프로필 사진' />
                        </div>
                        <S.ProfName><span>{localStorage.getItem('username')}</span></S.ProfName>
                    </S.Prof>
                    <S.ProfDetail id="myinfo">
                        <S.ProfDetailLi>
                            <ul>
                                <li className="profdet-li">
                                    <Link to="/myinfo/info" className='li-link' onClick={InfoClick}>내 정보</Link>
                                </li>
                                <li className="profdet-li">
                                    <Link to="/myinfo/basket" className='li-link' onClick={BasketClick}>장바구니</Link>
                                </li>
                                <li className="profdet-li">
                                    <Link to="/myinfo/select" className='li-link' onClick={SelectClick}>찜한 상품</Link>
                                </li>
                                <li className="profdet-li">
                                    <Link to="/myinfo/myQ&A" className='li-link' onClick={MyQnAClick}>내Q&A</Link>
                                </li>
                            </ul>
                        </S.ProfDetailLi>
                    </S.ProfDetail>
                    <Info />
                </S.MyContent>
            </S.Container>
        </>
    );

    function Info () {
    
        return (
            <>
                <S.ProfDetail id="myinfo-info">
                    <S.ProfDetailLi>
                        <ul>
                            <li className="profdet-li">
                                <Link to="/myinfo/info" className='li-link li-link-selected' onClick={InfoClick}>내 정보</Link>
                            </li>
                            <li className="profdet-li">
                                <Link to="/myinfo/basket" className='li-link'>장바구니</Link>
                            </li>
                            <li className="profdet-li">
                                <Link to="/myinfo/select" className='li-link'>찜한 상품</Link>
                            </li>
                            <li className="profdet-li">
                                <Link to="/myinfo/myQ&A" className='li-link'>내Q&A</Link>
                            </li>
                        </ul>
                    </S.ProfDetailLi>
                </S.ProfDetail>
            </>
        );
    }

};





const Basket = () => {
    return (
        <>
            <S.ProfDetailLi>
                <ul>
                    <li className="profdet-li">
                        <Link to="/myinfo/info" className='li-link'>내 정보</Link>
                    </li>
                    <li className="profdet-li">
                        <Link to="/myinfo/basket" className='li-link li-selected'>장바구니</Link>
                    </li>
                    <li className="profdet-li">
                        <Link to="/myinfo/select" className='li-link'>찜한 상품</Link>
                    </li>
                    <li className="profdet-li">
                        <Link to=".myinfo/myQ&A" className='li-link'>내Q&A</Link>
                    </li>
                </ul>
            </S.ProfDetailLi>
        </>
    );
}

const Select = () => {
    return (
        <>
            <S.ProfDetailLi>
                <ul>
                    <li className="profdet-li">
                        <Link to="/myinfo/info" className='li-link'>내 정보</Link>
                    </li>
                    <li className="profdet-li">
                        <Link to="/myinfo/basket" className='li-link'>장바구니</Link>
                    </li>
                    <li className="profdet-li">
                        <Link to="/myinfo/select" className='li-link li-selected'>찜한 상품</Link>
                    </li>
                    <li className="profdet-li">
                        <Link to=".myinfo/myQ&A" className='li-link'>내Q&A</Link>
                    </li>
                </ul>
            </S.ProfDetailLi>
        </>
    );
}

const MyQnA = () => {
    return (
        <>
            <S.ProfDetailLi>
                <ul>
                    <li className="profdet-li">
                        <Link to="/myinfo/info" className='li-link'>내 정보</Link>
                    </li>
                    <li className="profdet-li">
                        <Link to="/myinfo/basket" className='li-link'>장바구니</Link>
                    </li>
                    <li className="profdet-li">
                        <Link to="/myinfo/select" className='li-link'>찜한 상품</Link>
                    </li>
                    <li className="profdet-li">
                        <Link to=".myinfo/myQ&A" className='li-link li-selected'>내Q&A</Link>
                    </li>
                </ul>
            </S.ProfDetailLi>
        </>
    );
}




// 내 정보(main), 장바구니, 찜한 상품, 내Q&A 
//dddd
export default Myinfo;