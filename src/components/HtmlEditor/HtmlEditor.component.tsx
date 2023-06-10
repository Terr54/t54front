import React, {
  useState
} from 'react'

// Editor icons
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered'
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'
import UndoIcon from '@mui/icons-material/Undo'
import RedoIcon from '@mui/icons-material/Redo'
import InsertLinkIcon from '@mui/icons-material/InsertLink'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import HMobiledataIcon from '@mui/icons-material/HMobiledata'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import DeleteIcon from '@mui/icons-material/Delete'
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS'
import FormatSizeIcon from '@mui/icons-material/FormatSize'
import FormatColorTextIcon from '@mui/icons-material/FormatColorText'
import BrushIcon from '@mui/icons-material/Brush'
import ClearIcon from '@mui/icons-material/Clear'

import styles from './html-editor.module.css'

interface IProps {
  onchangeHandler: (event: any) => void
}

interface Editior {
  [key: string]: any
  name: string
  value?: string
  icon: any
  styles?: Record<string, unknown>
  command: string
}

const HtmlEditor: React.FC<IProps> = ({ onchangeHandler }) => {
  const [editting, setEditting] = useState(true)
  const [, setValue] = useState<any>('')

  const editors: Editior[] = [
    {
      name: 'Bold',
      icon: <FormatBoldIcon fontSize='medium' />,
      command: 'bold'
    },
    {
      name: 'Heading',
      icon: <HMobiledataIcon />,
      command: 'heading',
      value: 'h3'
    },
    {
      name: 'Italic',
      icon: <FormatItalicIcon fontSize='medium' />,
      command: 'italic'
    },
    {
      name: 'Underline',
      icon: <FormatUnderlinedIcon fontSize='medium' />,
      command: 'insertHorizontalRule'
    },
    {
      name: 'Font size',
      icon: <FormatSizeIcon fontSize='medium' />,
      command: 'fontSize',
      value: '1-7'
    },
    {
      name: 'Font color',
      icon: <FormatColorTextIcon fontSize='medium' />,
      command: 'foreColor',
      value: 'rgba(0,0,0,.5)'
    },
    {
      name: 'Highlight',
      icon: <BrushIcon fontSize='medium' />,
      command: 'hiliteColor',
      value: 'Orange'
    },
    {
      name: 'BulletList',
      icon: <FormatListBulletedIcon fontSize='medium' />,
      command: 'insertUnorderedList'
    },
    {
      name: 'NumberList',
      icon: <FormatListNumberedIcon fontSize='medium' />,
      command: 'insertOrderedList'
    },
    {
      name: 'Alight Justify',
      icon: <FormatAlignJustifyIcon fontSize='medium' />,
      command: 'justifyFull'
    },
    {
      name: 'Alight Left',
      icon: <FormatAlignLeftIcon fontSize='medium' />,
      command: 'justifyLeft'
    },
    {
      name: 'Alight Right',
      icon: <FormatAlignRightIcon fontSize='medium' />,
      command: 'justifyRight'
    },
    {
      name: 'Alight Center',
      icon: <FormatAlignCenterIcon fontSize='medium' />,
      command: 'justifyCenter'
    },
    {
      name: 'Undo',
      icon: <UndoIcon fontSize='medium' />,
      command: 'undo'
    },
    {
      name: 'Redo',
      icon: <RedoIcon fontSize='medium' />,
      command: 'redo'
    },
    {
      name: 'Create Link',
      icon: <InsertLinkIcon fontSize='medium' />,
      command: 'createLink',
      value: 'https://twitter.com/netsi1964'
    },
    {
      name: 'Strike Through',
      icon: <StrikethroughSIcon fontSize='medium' />,
      command: 'strikeThrough'
    },
    {
      name: 'Clear formatting',
      icon: <ClearIcon fontSize='medium' />,
      command: 'removeFormat'
    },
    {
      name: 'Delete',
      icon: <DeleteIcon fontSize='medium' />,
      command: 'delete'
    }
  ]

  const supported = (cmd: string) => {
    const css = document.queryCommandSupported(cmd) ? 'btn-succes' : 'btn-error'
    return css
  }

  const runCommand = (editor: Editior) => {
    if (supported(editor.command) === 'btn-error') {
      alert(`execCommand(“${editor.command}”)\nis not supported in your browser`)
      return
    }

    const val = (typeof editor.value !== 'undefined') ? prompt(`Value for ${editor.command}?`, editor.value) : ''
    document.execCommand(editor.command, false, (val ?? ''))
  }

  return (
		<div className={styles.main}>
			<div className={styles.btnsAndEditors}>
				<div>
					<button style={{ backgroundColor: !editting ? '#ff793f' : '' }} onClick={() => {
					  setEditting(true)
					}} className={styles.writePreviewBtn} type='button'>Write</button>
					<button style={{ backgroundColor: !editting ? '' : '#ff793f' }} onClick={() => {
					  setEditting(false)
					}} className={styles.writePreviewBtn} type='button'>Preview</button>
				</div>
				<div className={styles.editors}>
					{editors.map(editor => (
						<div
							tabIndex={0}
							role='button'
							className={styles.editor}
							key={editor.name}
							onMouseDown={e => {
							  e.preventDefault()
							}}
							onKeyDown={e => {
							  e.preventDefault()
							}}
							onClick={() => {
							  runCommand(editor)
							}}
						>
							{editor.icon}
							<br />
							<span className={styles.editorName}>{editor.name}</span>
						</div>
					))}
				</div>
			</div>
			{
				editting
				  ? (
						<div data-placeholder='Write here...' contentEditable onInput={e => {
						  onchangeHandler(e?.currentTarget?.textContent); setValue(e.currentTarget.textContent)
						}} className={styles.textarea} placeholder='Write here ...' />
				    )
				  : (
						<div style={{ backgroundColor: '#eee' }} className={styles.textarea} />
				    )
			}
		</div>
  )
}

export default HtmlEditor
