import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

import {
	Container,
	OldPrice,
	Price,
	ProductDescription,
	ProductImage,
} from './styles';

export function Product(props) {
	return (
		<Container>
			<ProductImage>
				<img src={props.img} alt={props.name} />
			</ProductImage>
			<ProductDescription>
				<span>
					<strong>{props.name}</strong>
				</span>
				<p>Quantidade:</p>
				<div>
					<p>1</p>
				</div>
				<OldPrice>
					<FormattedNumber
						value={props.oldPrice / 100}
						style="currency"
						currency="BRL"
					/>
				</OldPrice>

				<Price>
					<strong>
						<FormattedNumber
							value={props.price / 100}
							style="currency"
							currency="BRL"
						/>
					</strong>
				</Price>
			</ProductDescription>
		</Container>
	);
}

Product.propTypes = {
	img: PropTypes.string,
	name: PropTypes.string,
	oldPrice: PropTypes.string,
	price: PropTypes.string,
	quantity: PropTypes.number,
};
