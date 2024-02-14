
const UrlLink = ({url}) => {



	
	return (
	   
		<div className='UrlContainer' 
		style={{position:`absolute`,
		display: `flex`,
		alignItems:`flex-end`,
		alignContent: `flex-end`,
		flexDirection:`row`,
		bottom: "1vw",
		width: `60vw`,
		flexWrap: `wrap`,
		justifyContent: `space-between`,
		maxWidth: `600px`,
		}}>
			<div onClick={() => window.open(url, '_blank')}
			style={{
				position: `absolute`,
				//display: `flex`,
				fontSize:`4vw`,
				fontWeight:`bolder`,
				right: `0`,

			}}
			>?</div>
		</div>

	
	
	)
}

export default UrlLink;