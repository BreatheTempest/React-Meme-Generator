import memesData from '../memesData';
import React from 'react';

export default function Meme() {
	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	const [meme, setMeme] = React.useState({
		topText: 'Top text',
		bottomText: 'Bottom text',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});

	function generateMemeImg() {
		const memeArray = allMemeImages.data.memes;
		const randomMeme = Math.floor(Math.random() * memeArray.length);
		setMeme((prevState) => ({
			...prevState,
			randomImage: memeArray[randomMeme].url,
		}));
	}
	return (
		<main>
			<div className="form">
				<input type="text" id="first-input" placeholder={meme.topText} />
				<input type="text" id="second-input" placeholder={meme.bottomText} />
				<button onClick={generateMemeImg}>Get a new meme image 🖼</button>
			</div>
			<img src={meme.randomImage} alt="" />
		</main>
	);
}
