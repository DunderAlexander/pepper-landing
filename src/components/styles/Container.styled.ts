import { device } from '@/src/lib/mediaQueries'
import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 1.8rem;
	padding-left: 1.8rem;
	@media (min-width: 100%) {
		max-width: 100%;
	}
	@media (min-width: 720px) {
		padding-right: 3rem;
		padding-left: 3rem;
	}
	@media (min-width: 1390px) {
		max-width: 1390px;
	}
	@media (min-width: 1620px) {
		max-width: 1620px;
	}
`

export const PaddedContainer = styled(Container)`
	padding-block: 3.44rem;
	@media ${device.md} {
		padding-block: 7.5rem;
	}
`

export const Flex = styled.div<{
	$mobHidden?: boolean
	$row?: boolean
	$mobileGap?: string
	$justifyContent?: string
	$alignItems?: string
	$desktopGap?: string
	$deskHidden?: boolean
	$order?: number
	$desktopOrder?: number
	$desktopDirection?: string
	$desktopAlignItems?: string
}>`
	display: ${({ $mobHidden }) => ($mobHidden ? 'none' : 'flex')};
	flex-direction: ${({ $row }) => ($row ? 'row' : 'column')};
	gap: ${({ $mobileGap }) => $mobileGap};
	justify-content: ${({ $justifyContent }) => $justifyContent};
	align-items: ${({ $alignItems }) => $alignItems};
	order: ${({ $order }) => $order};
	@media ${device.md} {
		gap: ${({ $desktopGap }) => $desktopGap};
		display: ${({ $deskHidden }) => ($deskHidden ? 'none' : 'flex')};
		flex-direction: ${({ $desktopDirection }) => $desktopDirection};
		order: ${({ $desktopOrder }) => $desktopOrder};
		align-items: ${({ $desktopAlignItems }) => $desktopAlignItems};
	}
`

export const Grid = styled.div<{
	$desktopCols?: string
	$mobileCols?: string
	$desktopGap?: string
	$mobileGap?: string
}>`
	display: grid;
	grid-template-columns: ${({ $mobileCols }) => $mobileCols};
	gap: ${({ $mobileGap }) => $mobileGap};
	@media ${device.md} {
		grid-template-columns: ${({ $desktopCols }) => $desktopCols};
		gap: ${({ $desktopGap }) => $desktopGap};
	}
`
