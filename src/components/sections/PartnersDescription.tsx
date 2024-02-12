'use client'

import React from 'react'
import {
	Container,
	Flex,
	Grid,
	PaddedContainer,
} from '../styles/Container.styled'
import { Heading } from '../styles/Heading.styled'
import { Description } from '../styles/Description.styled'
import Image from 'next/image'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import HTMLReactParser from 'html-react-parser'
import PepperGraphIcon from '/public/images/pepper-graph.svg'
import { device } from '@/src/lib/mediaQueries'

const Break = styled.div`
	height: 100%;
	width: 1.5px;
	margin-inline: 1rem;
	background: var(
		--Red-Gradient,
		linear-gradient(180deg, #ed1c24 0%, rgba(237, 28, 36, 0) 100%)
	);
	@media ${device.md} {
		margin-inline: 4.44rem;
	}
`

const PartnersText = styled.p`
	font-family: var(--font-encode-sans-sc);
	font-size: 0.9375rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;

	font-weight: 300;
	@media ${device.md} {
		padding-inline: 0;
		font-size: 2.5rem;
	}
`

const ParntersGraphIcon = styled(PepperGraphIcon)`
	width: 100%;
	max-width: 4rem;
	@media ${device.md} {
		max-width: initial;
	}
`

const PartnersGrid = styled(Grid)`
	gap: 1rem;
	grid-template-columns: 1fr max-content 1fr;
	@media ${device.xl} {
		gap: 0;
	}
`

const IconsGrid = styled(Grid)`
	@media ${device.md} {
		grid-template-columns: 10% 1fr;
	}
	@media ${device.md} {
		grid-template-columns: 20% 1fr;
	}
`

export const PartnersDescription = () => {
	const { t } = useTranslation()
	return (
		<PaddedContainer>
			<Flex $mobileGap='1.88rem' $desktopGap='6.25rem'>
				<Heading $maxWidth='78rem'>{t('Trusted_title')}</Heading>
				<Description>{t('Trusted_subtitle')}</Description>
				<PartnersGrid>
					<IconsGrid
						$mobileCols='30% 1fr'
						$desktopGap='4.44rem'
						$mobileGap='.75rem'
					>
						<ParntersGraphIcon />
						<Description>{t('Trusted_benefits-1')}</Description>
					</IconsGrid>
					<Break />
					<IconsGrid
						$mobileCols='30% 1fr'
						$desktopGap='4.44rem'
						$mobileGap='.75rem'
					>
						<ParntersGraphIcon />
						<Description>{t('Trusted_benefits-2')}</Description>
					</IconsGrid>
				</PartnersGrid>
				<PartnersText>{HTMLReactParser(t('Trusted_description'))}</PartnersText>
				<Grid $mobileCols='1fr max-content 1fr'>
					<Flex $row={true} $desktopGap='4.44rem' $mobileGap='.75rem'>
						<Description $fontSizeDesktop='1.5625rem' $fontSizeMobile='.625rem'>
							{t('Trusted_text-1')}
						</Description>
					</Flex>
					<Break />
					<Flex $row={true} $desktopGap='4.44rem' $mobileGap='.75rem'>
						<Description $fontSizeDesktop='1.5625rem' $fontSizeMobile='.625rem'>
							{t('Trusted_text-2')}
						</Description>
					</Flex>
				</Grid>
			</Flex>
		</PaddedContainer>
	)
}
