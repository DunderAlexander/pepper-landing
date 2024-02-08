import styled from 'styled-components'

export const Description = styled.p<{
	$px?: string
	$pxMobile?: string
	$fontSizeDesktop?: string
	$fontSizeMobile?: string
}>`
	font-size: ${props => props.$fontSizeMobile || '0.9375rem'};
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	text-transform: uppercase;
	padding-inline: ${props => props.$pxMobile};
	@media screen and (min-width: 764px) {
		padding-inline: ${props => props.$px};
		font-size: ${props => props.$fontSizeDesktop || '2.5rem'};
	}
`
