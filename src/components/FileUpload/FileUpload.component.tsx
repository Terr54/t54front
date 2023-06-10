import { useState, useRef } from 'react'
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded'
import CancelIcon from '@mui/icons-material/Cancel'
import { uploadPublicFile } from './apis/fileUpload.api'
import FileIcon from '../icons/File.icon'
import ImageDisplay from '../ImageDisplay/ImageDisplay.component'
import WavyBottom from '../commons/WavyBottom/WavyBottom'
import styles from './FileUpload.module.css'

interface FileDisplayProps {
  actualFileName: string
  fileExt: string
  src: string
}

const FileDisplay = ({
  actualFileName, fileExt, src
}: FileDisplayProps) => {
  // Check if the file is an image
  const isImage = /jpeg|jpg|gif|png$/.exec(fileExt)

  return (
		<div className={styles.file_display__box}>
			<div className={styles.file_display__slot}>
				<div className={styles.file_display__slot1}>

					{
						isImage != null
						  ? <ImageDisplay src={src} />
						  : (
							<FileIcon
								ext={fileExt}
								fill='#3a20a5'
								style={{
								  transform: 'scale(3)', marginLeft: 20, marginTop: 28, fontSize: '0.7rem'
								}}
							/>
						    )
					}

				</div>
				<div className={styles.file_display__slot2}>
					<p>{actualFileName}</p>
				</div>
			</div>
		</div>
  )
}

const FileUpload = () => {
  // State to store the file
  const [, setFile] = useState<string | Blob>('')
  // Const [fileHandle, setFileHandle] = useState<File>(null);
  // State to store the btn enabled/disabled state
  const [btnE, setBtnE] = useState(true)
  // State to store the extension
  const [ext, setExt] = useState<string>('')
  // State to store the actualFileName
  const [fName, setFName] = useState<string>('')
  // State to store image src attribute
  const [src, setSrc] = useState<string>('')
  // Let fileHandle: File = null
  const fileInputRef = useRef<HTMLInputElement>(null)
  // Button Text State
  const [btnText, setBtnText] = useState<string>('👆 Upload')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null) {
      // SetFileHandle(e.target.files[0]);
      setFile(e.target.files[0])
      const fileName = e.target.value
      const actualFileNameplusext = fileName.toString()
      const pos = actualFileNameplusext.lastIndexOf('.')
      const FileName = actualFileNameplusext.slice(0, pos)
      const pos1 = FileName.lastIndexOf('\\')
      const actualFileName = FileName.slice(pos1)

      // Replace the string with only what is present after the dot
      const fileExt = actualFileNameplusext.replace(/^.*\./, '')
      setExt(fileExt)
      setFName(actualFileName.replace('\\', ''))

      // Create an object url
      const theSrc = URL.createObjectURL(e.target.files[0])
      setSrc(theSrc)
    }
  }

  return (
		<div className={styles.file_upload}>
			<label style={{ display: `${ext.length > 0 ? 'none' : 'block'}` }} htmlFor='file-upload-input'>
				{/* get an upload icon from material ui */}
				<UploadFileRoundedIcon className={styles.file_upload_select} />
				<input id='file-upload-input' type='file' onChange={handleChange} ref={fileInputRef} />
				<h2 className={styles.file_upload_text}>Select Files to Upload</h2>
			</label>
			{
				ext.length > 0
				  ? (
					<div className={styles.filebox}>
						<FileDisplay
							actualFileName={fName}
							fileExt={ext}
							src={src}
						/>
						<CancelIcon onClick={() => {
						  setExt('')
						  setBtnText('👆 Upload')
						  setBtnE(true)
						}}
						/>
					</div>
				    )
				  : ''
			}
			<button
				style={{ display: `${ext.length > 0 ? 'block' : 'none'}` }}
				className={`${btnE ? styles.file_upload__button : styles.file_upload__dull_button}`}
				type='submit'
				disabled={!btnE}
				onClick={event => {
				  event.preventDefault()
				  setBtnText('uploading . . .')
				  setBtnE(false)
				  // Console.log(fileInputRef.current.files[0]);
				  if (fileInputRef?.current?.files != null) {
				    void uploadPublicFile(fileInputRef.current.files[0], 'devs').then(
				      res => {
				        console.log(res?.data.url)
				        setBtnText('✅ Uploaded')
				      }
				    )
				  }
				  // UploadPublicFile(fileHandle, 'devs').then((res) => {
				  //   console.log(res?.data.url);
				  // });
				}}
			>
				{btnText}
			</button>
			<WavyBottom />
		</div>
  )
}

export default FileUpload
