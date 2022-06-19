import React from 'react';

export default function Meme() {
	const [allMemes, setAllMemes] = React.useState([]);

	React.useEffect(() => {
		async function getMemes() {
			const res = await fetch('https://api.imgflip.com/get_memes');
			const data = await res.json();
			setAllMemes(data.data.memes);
		}

		getMemes();
	}, []);

	const [meme, setMeme] = React.useState({
		topText: 'Top text',
		bottomText: 'Bottom text',
		randomImage: 'http://i.imgflip.com/1bij.jpg',
	});

	function generateMemeImg() {
		const randomMeme = Math.floor(Math.random() * allMemes.length);
		setMeme((prevState) => ({
			...prevState,
			randomImage: allMemes[randomMeme].url,
		}));
	}

	function handleChange(e) {
		const { name, value } = e.target;
		console.log(value);

		setMeme((prevMeme) => ({
			...prevMeme,
			[name]: value,
		}));
	}

	return (
		<main>
			<div className="form">
				<input
					type="text"
					id="first-input"
					name="topText"
					placeholder={meme.topText}
					onChange={handleChange}
					value={meme.topText}
				/>
				<input
					type="text"
					id="second-input"
					name="bottomText"
					placeholder={meme.bottomText}
					onChange={handleChange}
					value={meme.bottomText}
				/>
				<button onClick={generateMemeImg}>Get a new meme image 🖼</button>
			</div>
			<div className="meme">
				<img src={meme.randomImage} alt="" />
				<h2 className="meme-text top">{meme.topText}</h2>
				<h2 className="meme-text bottom">{meme.bottomText}</h2>
			</div>
		</main>
	);
}
