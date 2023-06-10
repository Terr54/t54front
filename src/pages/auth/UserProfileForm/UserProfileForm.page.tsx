/* eslint-disable @typescript-eslint/no-empty-function */

import PersonIcon from '@mui/icons-material/Person'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import * as S from './UserProfileForm.style'
import BasicDatePicker from '../../../components/commons/DatePicker/DatePicker'
import Input from '../../../components/commons/input/Input.component'
import WavyBottom from '../../../components/commons/WavyBottom/WavyBottom'

function UserProfileForm () {
  return (
		<S.UserProfileForm>
			<S.H1>
        LearnerColab
			</S.H1>
			<S.Sub>
        Fill in the form below to complete your registration process
			</S.Sub>
			<S.Form>
				<div>
					<S.NameInputs>
						<Input
							placeholder='first name'
							type='text'
							errorFound={false}
							errorMessage=''
							onChange={() => {}}
						>
							<PersonIcon />
						</Input>
						<Input
							placeholder='second name'
							type='text'
							errorFound={false}
							errorMessage=''
							onChange={() => {}}
						>
							<PersonIcon />
						</Input>

					</S.NameInputs>
					<Input
						placeholder='address'
						type='text'
						errorFound={false}
						errorMessage=''
						onChange={() => {}}
					>
						<LocationOnIcon />
					</Input>
					<Input
						placeholder='phone'
						type='tel'
						errorFound={false}
						errorMessage=''
						onChange={() => {}}
					>
						<PhoneIcon />
					</Input>
					<br />
					<BasicDatePicker />
				</div>

				<S.SubmitBtn variant='contained'>Finish</S.SubmitBtn>
			</S.Form>
			<WavyBottom />
		</S.UserProfileForm>
  )
}

export default UserProfileForm
