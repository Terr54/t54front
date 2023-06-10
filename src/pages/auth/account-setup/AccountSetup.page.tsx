import React, { useState } from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import { accountSetupSteps } from '../../../assets/data/accountSetupSteps'
import AuthWrapper from '../../../components/commons/auth-form/AuthWrapper.component'
import Input from '../../../components/commons/input/Input.component'
import Step from '../../../components/commons/step/Step.component'
import { Steps, PersonalInformation, FirstLast, ActionButtons, StyledRadioTexts } from './AccountSetup.styles'
import Button from '../../../components/commons/controls/button/Button.component';
import { RadioText } from '../signup/Signup.styles';
import FileUpload from '../../../components/file-upload/FileUpload.component';
import { path } from '../../../routes/paths';
import { useNavigate } from 'react-router-dom';

const AccountSetup = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [subheading, setSubheading] = useState('Personal Information');
  const [yes, setYes] = useState<boolean>(true);
  const [no, setNo] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);

  const navigate = useNavigate()

  const handleActive = (id: number) => {
    setActiveIndex(id);
    if (id === 0) {
      setSubheading('Personal Information')
    }
    if (id === 1) {
      setSubheading('Company Information')
    }
    if (id === 2) {
      setSubheading('Shipping Information')
    }
    if (id === 3) {
      setSubheading('Document Upload')
    }
  }

  const handleYes = () => {
    setYes(true);
    setNo(false);
  }
  const handleNo = () => {
    setNo(true);
    setYes(false);
  }

  const handleNext = () => {
    setActiveIndex((prev) => prev + 1)
  }
  const handleSkip = () => {
    navigate(path.MARKET);
  }

  return (
    <AuthWrapper subheading={subheading} heading='Set up your account' formHeight='100%'>
      <Steps>
      {
        accountSetupSteps.map((step) => (
          <Step step={step.step} key={step.id} active={activeIndex === step.id} onClick={() => handleActive(Number(step.id))} />
        ))
      }
      </Steps>
    {
      activeIndex === 0 && (
        <PersonalInformation>
          <FirstLast>
            <Input label='Your First Name' margin='0px 7px 0px 0px' placeholder='first name' />
            <Input label='Your Last Name' margin='0px 0px 0px 7px' placeholder='last name' />
          </FirstLast>
          <Input label='Your phone number(s)' placeholder='(+234) 908 765 4321' />
          <Input label='Role at company' placeholder='Chief Procurement Officer' />
          <Input label='Social Media' iconAfter placeholder='https://www.linkedin.com/in/samuel-sampson/' renderIcon={() => <LinkedInIcon /> } />
          <ActionButtons>
          <Button text='Skip' width='100%' bgColor='#fff' border='none' color='#E63F07' onClick={handleSkip} />
          <Button text='Next' width='100%' bgColor='#E63F07' onClick={handleNext} />
          </ActionButtons>
        </PersonalInformation>
      )
    }
    {
      activeIndex === 1 && (
        <PersonalInformation>
          <Input label='Company name' placeholder='Samuel Sampson Inc' />
          <FirstLast>
            <Input label='Industry' margin='0px 7px 0px 0px' placeholder='Beauty' />
            <Input label='Tax ID' margin='0px 0px 0px 7px' placeholder='000-000-00' />
          </FirstLast>
          <Input label='Company address' placeholder='12 alamin street, Bordeaux, France' />
          <FirstLast>
            <Input label='Zip code' margin='0px 7px 0px 0px' placeholder='000000' />
            <Input label='City' margin='0px 0px 0px 7px' placeholder='Calabasas' />
            <Input label='Country' margin='0px 0px 0px 7px' placeholder='Nigeria' />
          </FirstLast>
          <Input label='Company email address' placeholder='hello@samuelsampson.com' />
          <Input label='Company phone number(s)' placeholder='(+234) 908 765 4321' />
          <Input label='Company website (optional)' placeholder='Choose FIle' />
          <ActionButtons>
          <Button text='Skip' width='100%' bgColor='#fff' border='none' color='#E63F07' onClick={handleSkip} />
          <Button text='Next' width='100%' bgColor='#E63F07' onClick={handleNext} />
          </ActionButtons>
        </PersonalInformation>
      )
    }
    {
      activeIndex === 2 && (
        <PersonalInformation>
          <span>Do you have a warehouse ?</span>
          <StyledRadioTexts style={{ width: '100%' }}>
          <RadioText onClick={handleYes}>
            {
              yes ? (<RadioButtonCheckedIcon style={{ fontSize: '15px', color: '#86B817' }} />) : (<RadioButtonUncheckedIcon style={{ fontSize: '15px', color: '#B3B3B3' }} />)
            }
            <span style={{ marginRight: '106x' }}>Yes</span>
          </RadioText>
          <RadioText onClick={handleNo}>
            {
              no ? (<RadioButtonCheckedIcon style={{ fontSize: '15px', color: '#86B817' }} />) : (<RadioButtonUncheckedIcon style={{ fontSize: '15px', color: '#B3B3B3' }} />)
            }
            <span>No</span>
          </RadioText>
        </StyledRadioTexts>
        <Input label='Warehouse address' placeholder='Thomas Torino street, 4114 Puskas avenue, France' />
        <FirstLast>
          <Input label='Zip code' margin='0px 7px 0px 0px' placeholder='000000' />
          <Input label='City' margin='0px 0px 0px 7px' placeholder='Calabasas' />
        </FirstLast>
          <ActionButtons>
          <Button text='Skip' width='100%' onClick={handleSkip} bgColor='#fff' border='none' color='#E63F07' />
          <Button text='Next' width='100%' bgColor='#E63F07' onClick={handleNext} />
          </ActionButtons>
        </PersonalInformation>
      )
    }
    {
      activeIndex === 3 && (
      <PersonalInformation>
        <FileUpload filename='React' size='2.3MB' label='Company’s Certificate of Incorporation' uploading={uploading} onChange={() => setUploading(true)} />
        <FileUpload label='Company Rep’s ID' uploading={false} onChange={() => setUploading(true)} />
        <FileUpload label="Company Rep's Signature" uploading={false} onChange={() => setUploading(true)} />
        <Button text='Next' width='100%' bgColor='#E63F07' onClick={handleNext} />
      </PersonalInformation>
      )
    }
    </AuthWrapper>
  )
}

export default AccountSetup
