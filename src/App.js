import { IntlProvider } from 'react-intl';
import { Cart } from './components/Cart';
import { GlobalStyle } from './styles/globalStyles';

function App() {
	return (
		<>
			<IntlProvider locale="br" defaultLocale="br">
				<Cart />
			</IntlProvider>
			<GlobalStyle />
		</>
	);
}

export default App;
