import { Product } from '../Product';
import { FormattedNumber } from 'react-intl';
import {
	Container,
	FinishButton,
	FreeShipping,
	Header,
	ProductsBox,
	TotalContainer,
} from './styles';

import axios from 'axios';
import { useEffect, useState } from 'react';

export function Cart() {
	const [products, setProducts] = useState([]);
	const [price, setPrice] = useState({});

	useEffect(() => {
		const getProducts = async () => {
			// const productsResponse = await axios.get(
			// 	'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5bbd6fdd-abae-411d-96cc-1a5d76d3803b/abaixo-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5/20210405/us-west-2/s3/aws4_request&X-Amz-Date=20210405T194504Z&X-Amz-Expires=86400&X-Amz-Signature=d3709dce5d7f843a11c7fe7dc9cceec739d567077d15cc685da192e70dd75f24&X-Amz-SignedHeaders=host&response-content-disposition=filename%20=%22abaixo-10-reais.json%22',
			// );
			const productsResponse = await axios.get(
				'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/11b895d0-bc64-4f3a-bfa9-7c652be8d415/acima-10-reais.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5/20210405/us-west-2/s3/aws4_request&X-Amz-Date=20210405T221457Z&X-Amz-Expires=86400&X-Amz-Signature=8ba4aed64a031c6be81ec56154499a27ad8a01f9db8506b2f948c7f693c4c50a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20=%22acima-10-reais.json%22',
			);

			console.log(productsResponse.data.totalizers);

			const totalizers = productsResponse.data.totalizers.map(total => ({
				id: total.id,
				value: total.value / 100,
			}));

			console.log(totalizers[0].value);

			setProducts(productsResponse.data.items);
			setPrice({
				totalPrice: totalizers[0].value + totalizers[1].value,
				discounts: totalizers[1].value,
			});
		};

		getProducts();
	}, [setProducts]);

	return (
		<Container>
			<Header>
				<h2> Meu carrinho </h2>
			</Header>
			<hr />
			<ProductsBox>
				{products.map(product => (
					<Product
						key={product.id}
						img={product.imageUrl}
						name={product.name}
						oldPrice={product.listPrice}
						price={product.sellingPrice}
						quantity={product.quantity}
					/>
				))}
			</ProductsBox>
			<hr />
			<TotalContainer>
				<div>
					<p>
						<strong>Total</strong>
					</p>
					<p>
						<strong>
							<FormattedNumber
								value={price.totalPrice}
								style="currency"
								currency="BRL"
							/>
						</strong>
					</p>
				</div>
			</TotalContainer>
			<FreeShipping>
				{price.totalPrice > 10.0 && (
					<p>Parabéns sua compra tem frete grátis!</p>
				)}
			</FreeShipping>

			<hr />

			<FinishButton>
				<button>Finalizar compra </button>
			</FinishButton>
		</Container>
	);
}
