
import * as React from 'react'
import { makeStyles } from '@mui/styles'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const useStyles = makeStyles({
  root: {
    width: '665px',

    '& .MuiOutlinedInput-input': {

      borderRadius: '60px'
    },
    '& .MuiInputLabel-root': {

    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderRadius: '60px',
      width: '80%',
      height: '66px'
    },
    '&:hover .MuiOutlinedInput-input': {

      color: '#2148C0'
    },
    '&:hover .MuiInputLabel-root': {
      color: '#2148C0'
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      width: '665px',
      borderColor: '#2148C0'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input': {
      color: '#2148C0'
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#2148C0'
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#2148C0'
    }
  }
})

export default function BasicDatePicker () {
  const [value, setValue] = React.useState<Date | null>(null)
  const classes = useStyles()
  return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>

			<DatePicker
				label='Date Of Birth'
				value={value}
				onChange={newValue => {
				  setValue(newValue)
				}}
				renderInput={params => <TextField className={classes.root} {...params} />}
			/>

		</LocalizationProvider>
  )
}
