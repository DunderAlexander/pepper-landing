import {
	Encode_Sans,
	Encode_Sans_Expanded,
	Encode_Sans_SC,
} from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/src/lib/registry'
import { GlobalStylesProvider } from '@/src/components/providers/GlobalStylesProvider'
import { Header } from '@/src/components/layout/Header'
import { Footer } from '@/src/components/layout/Footer'

const EncodeSans = Encode_Sans({
	subsets: ['latin'],
	variable: '--font-encode-sans',
	display: 'swap',
})

const EncodeSCExt = Encode_Sans_SC({
	axes: ['wdth'],
	subsets: ['latin'],
	variable: '--font-encode-sans-sc-ext',
	display: 'swap',
})

const EncodeSC = Encode_Sans_SC({
	subsets: ['latin'],
	variable: '--font-encode-sans-sc',
	display: 'swap',
})

const EncodeSansExpanded = Encode_Sans_Expanded({
	subsets: ['latin'],
	variable: '--font-encode-sans-exp',
	weight: ['300', '700'],
	display: 'swap',
})

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			className={`${EncodeSC.variable} ${EncodeSansExpanded.variable} ${EncodeSCExt.variable}`}
		>
			<body className={EncodeSans.className}>
				<StyledComponentsRegistry>
					<GlobalStylesProvider>{children}</GlobalStylesProvider>
				</StyledComponentsRegistry>
			</body>
		</html>
	)
}
