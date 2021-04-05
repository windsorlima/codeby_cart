import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	max-width: 1120px;

	margin: 0 auto;

	hr {
		width: 100%;
		color: #8f969b;
		height: 2px;
	}
`;

export const Header = styled.div`
	width: 100%;
	padding: 20px 0;

	display: flex;
	justify-content: center;
`;

export const ProductsBox = styled.div`
	width: 100%;
	height: 420px;
	overflow: auto;
	display: flex;
	flex-direction: column;
	padding: 20px;

	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;

		> div {
			width: 45%;
		}
	}
`;

export const TotalContainer = styled.div`
	padding: 10px 0;

	> div {
		display: flex;
		justify-content: space-between;

		padding: 10px 20px;

		font-size: 1.5rem;
	}
`;

export const FinishButton = styled.div`
	padding: 20px;

	> button {
		width: 100%;
		border: none;
		font-size: 1.5rem;
		font-weight: 600;
		color: #fff;
		background-color: var(--blue);
		border-radius: 5px;
		height: 4rem;
	}

	@media screen and (min-width: 768px) {
		padding: 20px 0;
	}
`;

export const FreeShipping = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 20px;

	> p {
		text-align: center;
		font-size: 1.2rem;
		padding: 5px 10px;
		border-radius: 10px;
		background-color: #c7feae;
		color: #1f791e;
	}
`;
