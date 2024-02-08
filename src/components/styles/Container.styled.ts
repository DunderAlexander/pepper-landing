import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	margin-right: auto;
	margin-left: auto;
	padding-right: 1rem;
	padding-left: 1rem;
	@media (min-width: 100%) {
		max-width: 100%;
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
	@media screen and (min-width: 764px) {
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
}>`
	display: ${({ $mobHidden }) => ($mobHidden ? 'none' : 'flex')};
	flex-direction: ${({ $row }) => ($row ? 'row' : 'column')};
	gap: ${({ $mobileGap }) => $mobileGap};
	justify-content: ${({ $justifyContent }) => $justifyContent};
	align-items: ${({ $alignItems }) => $alignItems};
	@media screen and (min-width: 764px) {
		gap: ${({ $desktopGap }) => $desktopGap};
		display: ${({ $deskHidden }) => ($deskHidden ? 'none' : 'flex')};
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
	@media screen and (min-width: 764px) {
		grid-template-columns: ${({ $desktopCols }) => $desktopCols};
		gap: ${({ $desktopGap }) => $desktopGap};
	}
`
