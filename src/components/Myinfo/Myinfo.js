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

    // const info = document.querySelector("#myinfo");
    // const infoInf = document.querySelector("#myinfo-info");
    // const infoBsk = document.querySelector("#myinfo-basket");
    // const infoSlt = document.querySelector("#myinfo-select");
    // const infoQna = document.querySelector("#myinfo-myqna");

    const [showInf, setShowInf] = useState(false);
    const [showBsk, setShowBsk] = useState(false);
    const [showSlt, setShowSlt] = useState(false);
    const [showQna, setShowQna] = useState(false);

    const [showDft, setShowDft] = useState(true);


    let [Profile, setProfile] = useState(false);

    function InfoClick() {
        setShowDft(false);    
        setShowInf(true);
        setShowBsk(false);
        setShowSlt(false);
        setShowQna(false);
    }
    function BasketClick() {
        setShowDft(false);  
        setShowInf(false);
        setShowBsk(true);
        setShowSlt(false);
        setShowQna(false);
    }
    function SelectClick() {
        setShowDft(false);  
        setShowInf(false);
        setShowBsk(false);
        setShowSlt(true);
        setShowQna(false);
    }
    function MyQnAClick() {
        setShowDft(false);  
        setShowInf(false);
        setShowBsk(false);
        setShowSlt(false);
        setShowQna(true);
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
                        <S.ProfName><span className='userprfname'>{localStorage.getItem('username')}</span></S.ProfName>
                    </S.Prof>
                    {showDft &&
                        <S.ProfDetail>
                            <S.ProfDetailLi>
                                <ul>
                                    <li className="profdet-li">
                                        <a className='li-link' onClick={InfoClick}>내 정보</a>
                                    </li>
                                    <li className="profdet-li">
                                        <a className='li-link' onClick={BasketClick}>장바구니</a>
                                    </li>
                                    <li className="profdet-li">
                                        <a className='li-link' onClick={SelectClick}>찜한 상품</a>
                                    </li>
                                    <li className="profdet-li">
                                        <a className='li-link' onClick={MyQnAClick}>내Q&A</a>
                                    </li>
                                </ul>
                            </S.ProfDetailLi> 
                        </S.ProfDetail>
                    }
                    {showInf && <Info />}
                    {showBsk && <Basket />} 
                    {showSlt && <Select />}
                    {showQna && <MyQnA />}
                </S.MyContent>
            </S.Container>
        </>
    );

    function Info () {
    
        return (
            <>
                <S.ProfDetail>
                    <S.ProfDetailLi>
                        <ul>
                            <li className="profdet-li-selected">
                                <a className='li-link-selected' onClick={InfoClick}>내 정보</a>
                            </li>
                            <li className="profdet-li">
                                <a className='li-link' onClick={BasketClick}>장바구니</a>
                            </li>
                            <li className="profdet-li">
                                <a className='li-link' onClick={SelectClick}>찜한 상품</a>
                            </li>
                            <li className="profdet-li">
                                <a className='li-link' onClick={MyQnAClick}>내Q&A</a>
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
                <S.ProfDetailLi>
                    <ul>
                        <li className="profdet-li">
                            <a className='li-link' onClick={InfoClick}>내 정보</a>
                        </li>
                        <li className="profdet-li-selected">
                            <a className='li-link-selected' onClick={BasketClick}>장바구니</a>
                        </li>
                        <li className="profdet-li">
                            <a className='li-link' onClick={SelectClick}>찜한 상품</a>
                        </li>
                        <li className="profdet-li">
                            <a className='li-link' onClick={MyQnAClick}>내Q&A</a>
                        </li>
                    </ul>
                </S.ProfDetailLi>
            </>
        );
    }  


    function Select() {
        return (
            <>
                <S.ProfDetailLi>
                    <ul>
                        <li className="profdet-li">
                            <a className='li-link' onClick={InfoClick}>내 정보</a>
                        </li>
                        <li className="profdet-li">
                            <a className='li-link' onClick={BasketClick}>장바구니</a>
                        </li>
                        <li className="profdet-li-selected">
                            <a className='li-link-selected' onClick={SelectClick}>찜한 상품</a>
                        </li>
                        <li className="profdet-li">
                            <a className='li-link' onClick={MyQnAClick}>내Q&A</a>
                        </li>
                    </ul>
                </S.ProfDetailLi>
            </>
        );
    }


    function MyQnA() {
        return (
            <>
                <S.ProfDetailLi>
                    <ul>
                        <li className="profdet-li">
                            <a className='li-link' onClick={InfoClick}>내 정보</a>
                        </li>
                        <li className="profdet-li">
                            <a className='li-link' onClick={BasketClick}>장바구니</a>
                        </li>
                        <li className="profdet-li">
                            <a className='li-link' onClick={SelectClick}>찜한 상품</a>
                        </li>
                        <li className="profdet-li-selected">
                            <a className='li-link-selected' onClick={MyQnAClick}>내Q&A</a>
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