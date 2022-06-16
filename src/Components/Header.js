import img from '../images/troll.png';

export default function Header() {
	return (
		<header>
			<img src={img} alt="" />
			<h1>Meme Generator</h1>
			<h3>React Course - Project 3</h3>
		</header>
	);
}
