import styled from 'styled-components';
export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 2;
	background-color: #ccc;
`;

export const Form = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	img{
		
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #07aadb;
		margin-bottom: 1em;
		border: 4px solid #fff;

	}
	h1{
		
		color: #333;
		font-size: 1.3em;
		text-transform: uppercase;
		font-weight: bold;
		margin-bottom:1em;
	}

	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid #ddd;
		padding: 1em;
		border-radius: 3px;
		background-color: #eee;

		> div {
			display: flex;
			position: relative;

			
			flex-direction: column;

			& + div {
				margin-top: 30px;
			}

			label{
				font-weight: bold;
				margin-bottom: 5px;
			}
			input {
				padding: 16px;
				border: none;
				outline: none;
				width: 500px;
				border: 1px solid #ddd;
				background-color: #fff;
			}
		}

		button {
			margin-top: 20px;
			width: 100%;
			padding: 1em;
			border-radius: 3px;
			background: #07aadb;
			border: none;
			color: #fff;
			font-weight: bold;
			margin-top: 2em;
			&:hover{background: #333;}
			&:active{
				transform: translateY(4px);
			}

		}
	}
`;

export const Image = styled.div`
	height: 150px;
	margin-bottom: 1rem;
	img {
		height: 130px;
		width: 130%;
		border-radius:50%;
	}
`;
export const Error = styled.div`
	margin-bottom: 10px;
	color: #b50000;
	padding-top: 1em;
	font-weight: bold;
	font-size: 1.2em
`;
