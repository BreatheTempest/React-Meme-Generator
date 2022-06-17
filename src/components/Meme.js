import memesData from '../memesData';
import React from 'react';

export default function Meme() {
	const [memeImage, setMemeImage] = React.useState('');

	function generateMemeImg() {
		const memeArray = memesData.data.memes;
		const randomMeme = Math.floor(Math.random() * memeArray.length);
		setMemeImage(memeArray[randomMeme].url);
	}

	return (
		<main>
			<div className="form">
				<input type="text" id="first-input" placeholder="Top text" />
				<input type="text" id="second-input" placeholder="Bottom text" />
				<button onClick={generateMemeImg}>Get a new meme image 🖼</button>
			</div>
			<img src={memeImage} alt="" />
		</main>
	);
}
