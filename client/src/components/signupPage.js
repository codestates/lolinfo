import React from 'react';
import styled from 'styled-components';


function SignupPage({setLoginModal,setUserInfo}){
    function getInfoAll(){
        return ()=>{
        }
    }
    function getInputValue(e){
        console.log(e.target.matches('.ID'));
    }
    return(
        <div >
            <Container >
                <TitleOPGG>LOLINFO</TitleOPGG>
                <IDInput className='signUp ID' type="text" placeholder="Username or Email" required onChange={(e)=>getInputValue(e)}/>
                <PasswordInput placeholder="Enter your Password"/>
                <PasswordInputC placeholder="Confirm your Password"/>
                <SignUpButton>Submit</SignUpButton>
                <TextMessage>Already have an acount?</TextMessage>
                <SignIn onClick={()=>setLoginModal('login')&&setUserInfo('')}>Login</SignIn>
                <SocialContainer>
                    {/* <SocialButton1 src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg" alt=""/> */}
                    {/* <SocialButton2 src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt=""/> */}
                    <SocialButton3 src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png" alt=""/>
                </SocialContainer>
            </Container>
        </div>
    )
}

const Container=styled.div`
min-width: 320px;
height: 430px;
row-gap: 2%;
background:${(props)=>props.theme.mainColor};
color:${(props)=>props.theme.fontColor};
display: grid;
grid-template-columns:1fr repeat(6, 30px) 1.1fr ;
grid-template-rows: 20px 30px repeat(6, 1fr);
`
const TitleOPGG=styled.div`
grid-column: 3;
grid-row: 2;
font-size: large;
letter-spacing:${(props)=>props.theme.titleLetterSpace};
color:${(props)=>props.theme.fontColor};
background:${(props)=>props.theme.mainColor};
`
const IDInput=styled.input`
padding: 5px;
min-width: 200px;
max-width: 300px;
color:${(props)=>props.theme.fontColor};
background:${(props)=>props.theme.mainColor};
border-width: 0 0 1 0;
border-color: ${(props)=>props.theme.inputBorderColor};
grid-column: 2/5;
grid-row: 3/4;
font-size: large;
::-webkit-input-placeholder {
  color: ${(props)=>props.theme.placeHolderColor};
};

`
const PasswordInput=styled.input.attrs(_=> ({
    type: "password"
  }))`
  padding: 5px;
min-width: 200px;
max-width: 300px;
color:${(props)=>props.theme.fontColor};
background:${(props)=>props.theme.mainColor};
border-width: 0 0 1 0;
border-color: ${(props)=>props.theme.inputBorderColor};
grid-column: 2/5;
grid-row: 4/5;
font-size: large;
::-webkit-input-placeholder {
    color: ${(props)=>props.theme.placeHolderColor};
};
`
const PasswordInputC=styled.input.attrs(_=> ({
    type: "password"
  }))`
  padding: 5px;
min-width: 200px;
max-width: 300px;
color:${(props)=>props.theme.fontColor};
background:${(props)=>props.theme.mainColor};
border-width: 0 0 1 0;
border-color: ${(props)=>props.theme.inputBorderColor};
grid-column: 2/5;
grid-row: 5/6;
font-size: large;
::-webkit-input-placeholder {
    color: ${(props)=>props.theme.placeHolderColor};
};
`
const SocialContainer=styled.div`
display: grid;
width: 200px;
grid-column: 2/6;
grid-row: 6/7;
// column-gap: 10px;
grid-template-columns:repeat(3, 70px);
img {
    cursor: pointer;
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
}
`
const SocialButton1=styled.img`
grid-column: 1;
`
const SocialButton2=styled.img`
grid-column: 2;
`
const SocialButton3=styled.img`
grid-column: 2;
`
const SignUpButton=styled.button`
cursor: pointer;
grid-column: 4/5;
grid-row: 7/8;
width: 60px;
height: 60px;
border-radius: 60px;
border: 1px solid ${(props)=>props.theme.inputBorderColor};
// focus :{ outline: none; };
background:${(props)=>props.theme.mainColor};
color:${(props)=>props.theme.fontColor};
// border-color: ${(props)=>props.theme.inputBorderColor};

`
const TextMessage=styled.div`
font-size: small;
grid-column: 2/7;
grid-row: 8/9;
`
const SignIn=styled.div`
cursor: pointer;
// justify-content: left;
grid-column: 7;
grid-row: 8/9;
font-size: small;
color:${(props)=>props.theme.fontColor2};
`
export default SignupPage