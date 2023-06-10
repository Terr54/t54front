import type { SVGIconType } from './types'

const FileIcon = ({
  fill = '#fff', background = '#333', style, ext, ...props
}: SVGIconType & { ext: string }) => (
	<svg
		{...props}
		tabIndex={0}
		role='button'
		style={{
		  ...({
		    height: '1.5em',
		    width: '1.5em',
		    cursor: 'pointer',
		    border: 'none',
		    outline: 'none'
		  }),
		  ...(style ?? {})
		}}
		viewBox='0 0 24 24'
		fill={background}
	>
		<g>
			<g>
				<g>
					<path stroke={fill} strokeWidth='2' d='M13,7' />
				</g>
			</g>
			<g>
				<g>
					<path fill={fill} d='M20,8h-6c-0.6,0-1-0.4-1-1V1h2v5h5V8z' />
				</g>
			</g>
			<g>
				<g>
					<path
						fill={fill}
						d='M20,24H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h10c0.3,0,0.5,0.1,0.7,0.3l6,6C20.9,6.5,21,6.7,21,7v16
                    C21,23.6,20.6,24,20,24z M5,22h14V7.4L13.6,2H5V22z'
					/>
				</g>
			</g>
		</g>
		<text textAnchor='middle' x={12} y={18} fill={fill} fontSize={8}>{ext}</text>
	</svg>
)

export default FileIcon
