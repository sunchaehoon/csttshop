import React, {useState} from 'react';
import * as S from './Styled.js';
import './style.css';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import Myinfo from './Myinfo.js';
const Info = () => {
    return (
        <>
            <S.Container>
                <Header />
                <S.MyContent>
                    <S.Prof>
                        <div className='userPrf'>
                            <img className='userPrf-prf' src="img/user-1.png" width='70' alt='프로필 사진' />
                        </div>
                        <S.ProfName><span>{localStorage.getItem('username')}</span></S.ProfName>
                    </S.Prof>
                    <S.ProfDetail>
                        <S.ProfDetailLi>
                            <ul>
                                <li className="profdet-li-selected">
                                    <Link to="/myinfo/info" className='li-link-selected'>내 정보</Link>
                                </li>
                                <li className="profdet-li">
                                    <Link to="/myinfo/basket" className='li-link'>장바구니</Link>
                                </li>
                                <li className="profdet-li">
                                    <Link to="/myinfo/select" className='li-link'>찜한 상품</Link>
                                </li>
                                <li className="profdet-li">
                                    <Link to=".myinfo/myQ&A" className='li-link'>내Q&A</Link>
                                </li>
                            </ul>
                        </S.ProfDetailLi>

                    </S.ProfDetail>
                </S.MyContent>
            </S.Container>
        </>
    );
}

export default Info;