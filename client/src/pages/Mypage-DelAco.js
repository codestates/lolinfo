import styled from 'styled-components';
import MypageNavbar from './pageComponents/MypageComponents/MypageNavbarComponent'


const Container = styled.div`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: 50px repeat(10, minmax(auto, 1fr));
 background-color: ${props => props.theme.recordBgColor};
`;
const SubMenu = styled.div`
 grid-row: 1/1;
 grid-column: 1/11;
 height: 3.7vw;
 align-items: center;
 background-color: #fff;
`;
const DeletePage = styled.div`
 display: grid;
 grid-template-columns: repeat(9, minmax(auto, 1fr));
 grid-template-rows: 40px repeat(7, minmax(auto, 1fr));
 grid-row: 2/11;
 grid-column: 1/11;
 background-color:${props => props.theme.recordBgColor};
`;
const DeleteAccountContainer = styled.div`
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row: 2/9;
 grid-column: 3/8;
 background-color: #fff;
 @media (max-width: 700px) {
 display: grid;
 grid-template-columns: repeat(10, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row: 2/9;
 grid-column: 1/10;
 background-color: #fff;
} 
`;
const Header = styled.h2`
 grid-row: 1/2;
 grid-column:2/5;
 font-weight: 400;
 padding: 16px 0px;
 @media (max-width: 700px) {
 grid-row: 1/2;
 grid-column:2/5;
 font-weight: 400;
 padding: 16px 0px;
} 
`;
const SmallHeader = styled.h4`
 grid-row: 2/3;
 grid-column:2/10;
 font-weight: 400;
 color: ${props => props.theme.MypageSmallHeader};
 @media (max-width: 700px) {
 grid-row: 2/3;
 grid-column:2/10;
 font-weight: 400;
 font-size:12px;
 color: ${props => props.theme.MypageSmallHeader};
} 
`;
const FirstLaw = styled.div`
 display: grid;
 grid-template-columns: repeat(9, minmax(auto, 1fr));
 grid-template-rows: repeat(9, minmax(auto, 1fr));
 grid-row: 3/4;
 grid-column:2/10;
 border-top: 1px solid ${props => props.theme.MypageLineColor};
`;
const FirstLawName = styled.div`
 grid-row: 1/5;
 grid-column:1/10;
 font-weight: 400;
 font-size: 18px;
`;
const FirstLawdetail = styled.div`
 grid-row: 5/10;
 grid-column:1/10;
 color: ${props => props.theme.MypageSmallHeader};
 font-size: 12px;
 font-weight: 400;
`;
const SecondLaw = styled.div`
 grid-row: 4/5;
 grid-column:2/10;
`;
const SecondLawName = styled.div`
 grid-row: 1/5;
 grid-column:1/10;
 font-weight: 400;
 font-size: 18px;
`;
const SecondLawdetail = styled.div`
 grid-row: 5/10;
 grid-column:1/10;
 color: ${props => props.theme.MypageSmallHeader};
 font-size: 12px;
 font-weight: 400;
 `;
const ThirdLaw = styled.div`
 grid-row: 5/6;
 grid-column:2/10;
`;
const ThirdLawName = styled.div`
 grid-row: 1/5;
 grid-column:1/10;
 font-weight: 400;
 font-size: 18px;
`;
const ThirdLawdetail = styled.div`
 grid-row: 5/10;
 grid-column:1/10;
 color: ${props => props.theme.MypageSmallHeader};
 font-size: 12px;
 font-weight: 400;
 `;
const FourthLaw = styled.div`
 grid-row: 6/7;
 grid-column:2/10;
`;
const FourthLawName = styled.div`
 grid-row: 1/5;
 grid-column:1/10;
 font-weight: 400;
 font-size: 18px;
`;
const FourthLawdetail = styled.div`
 grid-row: 5/10;
 grid-column:1/10;
 color: ${props => props.theme.MypageSmallHeader};
 font-size: 12px;
 font-weight: 400;
 `;
const FifthLaw = styled.div`
 grid-row: 7/8;
 grid-column:2/10;
 border-bottom: 1px solid ${props => props.theme.MypageLineColor};
`;
const FifthLawName = styled.div`
 grid-row: 1/5;
 grid-column:1/10;
 font-weight: 400;
 font-size: 18px;
`;
const FifthLawdetail = styled.div`
 grid-row: 5/10;
 grid-column:1/10;
 color: ${props => props.theme.MypageSmallHeader};
 font-size: 12px;
 font-weight: 400;
 `;
const CheckBoxDiv = styled.div`
 display: grid;
 grid-template-columns: repeat(9, minmax(auto, 1fr));
 grid-template-rows: repeat(1, minmax(auto, 1fr));
 grid-row: 8/9;
 grid-column:2/10;
`;
const CheckBox = styled.input`
 grid-row: 1;
 grid-column:1/2;
 width: 20px;
 height: 20px;
 outline: 0;
 margin: 26px 5px 5px 0px;
 cursor: pointer;
`;
const CheckBoxDetail = styled.div`
 grid-row: 1;
 grid-column:2/10;
 margin: 24px 5px 5px -30px;
 @media (max-width: 700px) {
 grid-row: 1;
 grid-column:2/10;
 font-size: 13px;
 margin: 26px 5px 5px -15px;
}
`;
const AgreeORDisAgree = styled.div`
 display: grid;
 grid-template-columns: repeat(13, minmax(auto, 1fr));
 grid-template-rows: repeat(10, minmax(auto, 1fr));
 grid-row: 10/11;
 grid-column:2/10;
`;
const Disagree = styled.button`
 grid-row: 2/10;
 grid-column:4/7;
 background-color: #fff;
 border: 2px solid ${props => props.theme.MypageLineColor};
 cursor: pointer;
 font-size: 18px;
`;
const Agree = styled.button`
 grid-row: 2/10;
 grid-column:8/11;
 background-color: ${props => props.theme.MypageLineColor};
 color: #fff;
 font-weight: 700;
 border: 0;
 font-size: 18px;
`;
function DeleteAccountPage() {

    return (
        <Container>
            <SubMenu>
                <MypageNavbar></MypageNavbar>
            </SubMenu>
            <DeletePage>
                <DeleteAccountContainer>
                    <Header>회원탈퇴</Header>
                    <SmallHeader>회원탈퇴 전에 반드시 유의사항을 확인하고 진행해 주세요.</SmallHeader>
                    <FirstLaw>
                        <FirstLawName>개인정보 및 서비스 이용 기록 삭제</FirstLawName>
                        <FirstLawdetail>개인정보 및 개인화 서비스 이용기록이 모두 삭제 되며, 삭제된 데이터는 복구되지 않습니다. 필요한 데이터는 미리 백업해 주시기 바랍니다.</FirstLawdetail>
                    </FirstLaw>
                    <SecondLaw>
                        <SecondLawName>소셜 계정 연결 정보 삭제</SecondLawName>
                        <SecondLawdetail>이메일 ID에 소셜 계정을 연결한 경우 탈퇴 시 연결 정보도 함께 삭제됩니다.</SecondLawdetail>
                    </SecondLaw>
                    <ThirdLaw>
                        <ThirdLawName>커뮤니티 서비스 등록 게시물 유지</ThirdLawName>
                        <ThirdLawdetail>회원가입 이후 등록하신 게시물들은 회원탈퇴 후에도 삭제 되지 않고 유지됩니다. 삭제를 원하시는 경우에는 직접 삭제하신 후 회원탈퇴를 진행하시기 바랍니다.</ThirdLawdetail>
                    </ThirdLaw>
                    <FourthLaw>
                        <FourthLawName>개인정보 보관</FourthLawName>
                        <FourthLawdetail>회원 탈퇴 시 일부 개인정보는 개인정보처리방침에 따라 탈퇴일로부터 30일간 보관되며, 그 이후 관계법령에 필요한 경우에는 별도 보관합니다.</FourthLawdetail>
                    </FourthLaw>
                    <FifthLaw>
                        <FifthLawName>탈퇴 후 제한</FifthLawName>
                        <FifthLawdetail>탈퇴 처리된 이메일 ID는 30일동안 재가입이 불가합니다.</FifthLawdetail>
                    </FifthLaw>
                    <CheckBoxDiv>
                        <CheckBox type="checkbox"></CheckBox>
                        <CheckBoxDetail>회원탈퇴 시 유의사항을 확인하였으며, 모두 동의합니다.</CheckBoxDetail>
                    </CheckBoxDiv>
                    <AgreeORDisAgree>
                        <Disagree>비동의</Disagree>
                        <Agree>동의</Agree>
                    </AgreeORDisAgree>
                </DeleteAccountContainer>
            </DeletePage>
        </Container>
    )
}

export default DeleteAccountPage;