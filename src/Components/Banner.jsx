import React from 'react'
import AspectRatio from './AspectRatio.styled'
import banner from "../images/banner.jpg";

const Banner = () => {
	return (
		<AspectRatio className="banner" id="banner" ratioWidth={16} ratioHeight={9}>
			<img src={banner} alt="" />
			<div className="content">
				<h1 className="display-1 text-white">Hilton</h1>
				<h4 className="text-white">
					Hotels & Resorts
				</h4>
			</div>
		</AspectRatio>
	)
}

export default Banner
