import { device } from '@/src/lib/mediaQueries'
import styled from 'styled-components'

export const Description = styled.p<{
	$px?: string
	$uppercase?: boolean
	$pxMobile?: string
	$fontSizeDesktop?: string
	$fontSizeMobile?: string
}>`
	font-size: ${props => props.$fontSizeMobile || '0.9375rem'};
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	text-transform: ${props => (props.$uppercase ? 'uppercase' : 'none')};
	padding-inline: ${props => props.$pxMobile};
	@media ${device.md} {
		padding-inline: ${props => props.$px};
		font-size: ${props => props.$fontSizeDesktop || '2.5rem'};
	}
`
