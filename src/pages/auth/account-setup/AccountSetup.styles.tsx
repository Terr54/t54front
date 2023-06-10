import styled from '@emotion/styled'
import { RadioTexts } from '../../../components/commons/radio-text/RadioTexts.styles'

export const Container = styled.div`
  
`
export const Steps = styled.div`
  display: flex;
`
export const PersonalInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const FirstLast = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
`
export const StyledRadioTexts = styled(RadioTexts)`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
  justify-content: flex-start;
`
