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
    let infoBsk = document.querySelector("#myinfo-basket");
    let infoSlt = document.querySelector("#myinfo-select");
    let infoQna = document.querySelector("#myinfo-myqna");

    let [Profile, setProfile] = useState(false);



    function InfoClick() {    
        infoInf.style.visibility = "visible";
        info.style.display = "none";
        infoBsk.style.display = "none";
        infoSlt.style.display = "none";
        infoQna.style.display = "none";
    }
    function BasketClick() {
        infoBsk.style.visibility = "visible";
        info.style.display = "none";
        infoInf.style.display = "none";
        infoSlt.style.display = "none";
        infoQna.style.display = "none";
    }
    function SelectClick() {
        infoSlt.style.visibility = "visible";
        info.style.display = "none";
        infoInf.style.display = "none";
        infoBsk.style.display = "none";
        infoQna.style.display = "none";
    }
    function MyQnAClick() {
        infoQna.style.visibility = "visible";
        info.style.display = "none";
        infoInf.style.display = "none";
        infoBsk.style.display = "none";
        infoSlt.style.display = "none";
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
                    <S.ProfDetail onChange={() => {setProfile(true)}} id="myinfo">
                        <S.ProfDetailLi>
                            <ul>
                                <li className="profdet-li">
                                    <Link to="/myinfo/infos" className='li-link' onClick={InfoClick}>내 정보</Link>
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
                    <Basket />
                    <Select />
                    <MyQnA />
                </S.MyContent>
            </S.Container>
        </>
    );

    function Info () {
    
        return (
            <>
                <S.ProfDetail onChange={() => {setProfile(true)}} id="myinfo-info">
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







function Basket() {
    return (
        <>
            <S.ProfDetailLi onChange={() => {setProfile(true)}} id="myinfo-basket">
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
                        <Link to="/myinfo/myQ&A" className='li-link'>내Q&A</Link>
                    </li>
                </ul>
            </S.ProfDetailLi>
        </>
    );
}

function Select() {
    return (
        <>
            <S.ProfDetailLi onChange={() => {setProfile(true)}} id="myinfo-select">
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
                        <Link to="/myinfo/myQ&A" className='li-link'>내Q&A</Link>
                    </li>
                </ul>
            </S.ProfDetailLi>
        </>
    );
}

function MyQnA() {
    return (
        <>
            <S.ProfDetailLi onChange={() => {setProfile(true)}} id="myinfo-myqna">
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
                        <Link to="/myinfo/myQ&A" className='li-link li-selected'>내Q&A</Link>
                    </li>
                </ul>
            </S.ProfDetailLi>
        </>
    );
}

};




// 내 정보(main), 장바구니, 찜한 상품, 내Q&A 
//dddd
export default Myinfo;