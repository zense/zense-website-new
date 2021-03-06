import React from 'react'
import '../static/Http.css'
import image404 from '../assets/404.png'

function NotFound() {
	return(
		<div className='container'>
			<img className='http-err-msg' src={image404}></img>
			<div className='http-err'>
				Uh oh! You seem to be lost
				<a className='home-button' href='/'>
					<span className="home-button-text">Take me home</span>
				</a>
			</div>
		</div>
		)
}

export default NotFound;