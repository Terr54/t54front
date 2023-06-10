import styled from '@emotion/styled'
import { Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

export const UserProfileForm = styled.div`
text-align:center;
text-transform: capitalize;
height:100%;
padding:2%;
padding-bottom:0%;
@media (min-width: 1024px) {
height:100%;
}
`
export const H1 = styled.h1`
    color:#2148C0;
    font-weight:900;
`
export const Sub = styled.p`
    font-style:italic;
    font-weight:300;
`
export const Form = styled.form`
padding: 2%;
margin:0 auto;
height:auto;
@media (min-width: 720px) {
    width: 665px;

    
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

}
`
export const NameInputs = styled.div`
    margin:0 auto;
    width:100%;
    display: flex;
    justify-content:space-around;
    @media (max-width: 720px) {
    display:block;

}
    
`
export const DOB = styled.input`
    padding:2%;
    
    margin:2%;
    width: 17rem;
    height:38.7px;
    border:.3px solid;
    background:#f5f5f5;
    border-radius:6px;
    padding-left:15%;
    &::focus{
    border-radius:6px;
    border: black;
    
    
    }
    @media (min-width: 720px) {
    
        height:38.7px;
        border: none;

}
`
export const LastName = styled(DOB)`
text-transform: capitalize;
    border-radius:6px;
`
export const LongInputs = styled(DOB)`
    
    padding-left:15%;
    font-size:13px;
    font-family: inherit;
    @media (max-width: 720px) {
    width:89%;

}
`
export const OdaInputs = styled(LongInputs)`
    width:80%;
    @media (max-width: 720px) {
    width:80%;

}
`
export const SubmitBtn = styled(Button)`
    background-color:#2148C0;
    margin: 2%;
    border-radius: 60px;
    width: 100%;
    padding:3%;
    margin-bottom: 4%;
    &::focus{
    background-color:#2148C0;

    }
    @media (min-width: 400px) {
    margin-top: 4%;
        /* height:28.7px; */
        border: none;
        width: 100%;


}
`
export const NameIcon = styled(PersonIcon)`
 font-size:2.3rem;
 position: relative;
 display:none;
 /* left:10px; */
`
export const InputContainer = styled.div`
display: flex;
  width: 100%;
  /* margin-bottom: 15px; */
`
// Export const Svg = styled.svg`
// width:100%;
// `;
