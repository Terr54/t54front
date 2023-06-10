import './routerLoader.css'

function RouteLoader () {
  return (
		<div
			style={{
			  margin: 'auto',
			  minHeight: '100vh',
			  alignItems: 'center',
			  justifyContent: 'center',
			  display: 'flex',
			  flexDirection: 'column'
			}}
			className='loader'
		>
			<div
				className='animate__animated animate__shakeY'
				style={{
				  width: '80vw',
				  height: '80vh',
				  margin: 'auto',
				  overflow: 'hidden',
				  display: 'flex',
				  flexDirection: 'column',
				  justifyContent: 'center',
				  alignItems: 'center'
				}}
			>
				<div className='waviy'>
					<span>T</span>
					<span>E</span>
					<span>R</span>
					<span>R</span>
					<span>E</span>
					<span></span>
					<span>5</span>
					<span>4</span>
					<span>.</span>
					<span>.</span>
					<span>.</span>
					<span>.</span>
					<span>.</span>
				</div>
			</div>
		</div>
  )
}

export default RouteLoader
