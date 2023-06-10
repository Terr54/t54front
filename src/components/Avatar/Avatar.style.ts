import styled from '@emotion/styled'
import ModeEdit from '@mui/icons-material/ModeEdit'
import { AvatarStyleProps, EditBtnStyleProps } from './avatar.types'

export const Avatar = styled.div<AvatarStyleProps>`
    background: url(${props => props.bgImage});
    margin: 0 auto;
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius:50%;
    vertical-align: middle;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
     `

// If you want to show it as editable
export const EditButton = styled.div<EditBtnStyleProps>`
    /* Rounded border */
    position:relative;
    margin-top:-50%;
    margin-left:60.2%;
    margin-bottom:50%;
    border-radius: 50%;
    background:#2148C0;
    font-size:2rem;
    padding:1%;
    /* Calculate the Height from the height given for the Avatar Image */
    height:  calc(${props => props.avatarHeight}px * 0.2);
    width:  calc(${props => props.avatarWidth}px * 0.2);

    &:hover{
      cursor:pointer;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
    }
`
export const Edit = styled(ModeEdit)`
    &.override{
            background-color: red;
        }
`
