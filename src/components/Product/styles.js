import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 10px 0;
`;

export const ProductImage = styled.div`
	width: 40%;
	height: 100%;

	> img {
		max-width: 100%;
		max-height: 100%;
		border: 1px solid;
		border-color: var(--gray);
	}
`;

export const ProductDescription = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	padding: 0 10px;

	> span {
		padding-bottom: 5px;
	}
`;

export const OldPrice = styled.p`
	font-size: 0.8rem;
	color: var(--gray);
`;

export const Price = styled.p``;
