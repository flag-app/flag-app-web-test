import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { emailState } from '../recoil/Atoms';

import logo from '../contents/Logo_플래그_Small_수정.svg';
import emailIcon from '../contents/desktop/sign/Ic_비밀번호변경이메일_Email.svg';
import nextButton from '../contents/desktop/sign/Btn_다음.svg'; // 다음

const Logo = styled.img`
  width: 253.662109375px;
  height: 93px;
  margin: 164px auto 0px;
  display: block;

  @media screen and (max-width: 500px) {
    width: 200px;
    margin-top: 128px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
  }
`;

const EmailIcon = styled.img`
  width: 108px;
  height: 108px;
  margin: 30px auto 0px;
  border: 0;

  @media screen and (max-width: 500px) {
    width: 100px;
    height: 100px;
    margin: 45px auto 0px;
  }
`;

const EmailAddress = styled.p`
  margin: 26px auto 0px;
  font-size: 25px;
  font-weight: 700;
  line-height: normal;
  font-family: Inter;
  font-style: normal;

  @media screen and (max-width: 500px) {
    width: 300px;
    font-size: 18px;
  }
`;

const EmailMessage = styled.p`
  margin-top: 8px;
  font-size: 22px;
  font-weight: 700;
  line-height: normal;
  font-family: Inter;
  font-style: normal;

  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
`;

const ChangeEmail = styled.p`
  margin: 17px auto 0px;
  color: #696767;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  white-space: pre-wrap;

  @media screen and (max-width: 500px) {
    font-size: 15px;
    width: 300px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    margin: 0 auto;
  }
`;

const TempPasswordInput = styled.input`
  width: 450px;
  height: 50px;
  background-color: #d9d9d9;
  margin-top: 15px;
  border-radius: 13px;
  padding-left: 20px;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  border: 0;

  @media screen and (max-width: 500px) {
    width: 300px;
    font-size: 15px;
  }
`;

const LoginButton = styled.img`
  width: 355px;
  height: 41px;
  border: 0;
  margin: 30px auto 0;

  @media screen and (max-width: 500px) {
    width: 300px;
    margin: 20px auto 0;
  }
`;

function ResetPassword2() {
  const email = useRecoilValue(emailState);

  const handleEmailSentClick = () => {
    console.log();
    //axios 자리
  };

  return (
    <>
      <Wrapper>
        <Logo src={logo} alt="로고" />
        <EmailIcon src={emailIcon} alt="이메일 아이콘" />
        <EmailAddress>{email}</EmailAddress>
        <EmailMessage>
          으로 임시 비밀번호 발송이 완료되었습니다!
        </EmailMessage>
        <ChangeEmail>
          이메일로 발송된 임시 비밀번호로 로그인하세요.
        </ChangeEmail>
        <InputWrapper>
          <TempPasswordInput
            type="password"
            placeholder="임시 비밀번호 입력"
          />
        </InputWrapper>
        <Link to="/new-password">
          <LoginButton
            src={nextButton}
            onClick={handleEmailSentClick}
          />
        </Link>
      </Wrapper>
    </>
  );
}

export default ResetPassword2;
