import styled from '@emotion/styled'

export const WavyBottom = styled.img`
  display:none;
   @media (min-width: 420px) {
     display:block;
    position:absolute;
  bottom:0;
  left:0;
  z-index:-1;
}
  @media
    only screen and (max-device-width: 1136px) and (min-device-width: 960px) and (max-device-height: 640px) and (min-device-height: 560px),
    only screen and (max-device-height: 1136px) and (min-device-height: 960px) and (max-device-width: 640px) and (min-device-width: 560px) {
    /* iPhone only */
    background:red;
}
 
`
