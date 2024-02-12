'use client'

import React from 'react'
import { Flex, Grid, PaddedContainer } from '../styles/Container.styled'
import { Heading } from '../styles/Heading.styled'
import Image from 'next/image'
import { RedButton } from '../styles/Button.styled'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { device } from '@/src/lib/mediaQueries'

const ImageWrapper = styled.div`
	width: 2.4rem;
	height: 2.6rem;
	position: relative;
	@media ${device.md} {
		width: 4.8rem;
		height: 7.5rem;
	}
`

const PartnersTitle = styled.h2`
	font-size: 0.9375rem;
	font-weight: 700;
	@media ${device.md} {
		font-size: 1.875rem;
	}
`

const PartnersDescription = styled.p`
	font-size: 0.625rem;
	font-weight: 500;
	font-family: var(--font-encode-sans-sc);
	@media ${device.md} {
		font-size: 1.25rem;
	}
`

export const PartnersSteps = () => {
	const { t } = useTranslation()
	return (
		<PaddedContainer>
			<Flex $desktopGap='6.25rem' $mobileGap='1.87rem'>
				<Heading>{t('Start_title')}</Heading>
				<Grid
					$mobileCols='1fr'
					$mobileGap='1.31rem'
					$desktopGap='1rem'
					$desktopCols='1fr 1fr 1fr'
				>
					<Flex
						$row={true}
						$desktopDirection='column'
						$alignItems='center'
						$desktopAlignItems='start'
						$mobileGap='1rem'
						$desktopGap='1.62rem'
					>
						<ImageWrapper>
							<Image src='/images/steps/1.svg' fill={true} alt='' />
						</ImageWrapper>
						<Flex>
							<PartnersTitle>{t('Start_subtitle-1')}</PartnersTitle>
							<PartnersDescription>{t('Start_text-1')}</PartnersDescription>
						</Flex>
					</Flex>
					<Flex
						$row={true}
						$desktopDirection='column'
						$alignItems='center'
						$desktopAlignItems='start'
						$mobileGap='1rem'
						$desktopGap='1.62rem'
					>
						<ImageWrapper>
							<Image src='/images/steps/2.svg' fill={true} alt='' />
						</ImageWrapper>
						<Flex>
							<PartnersTitle>{t('Start_subtitle-2')}</PartnersTitle>
							<PartnersDescription>{t('Start_text-2')}</PartnersDescription>
						</Flex>
					</Flex>
					<Flex
						$row={true}
						$desktopDirection='column'
						$alignItems='center'
						$desktopAlignItems='start'
						$mobileGap='1rem'
						$desktopGap='1.62rem'
					>
						<ImageWrapper>
							<Image src='/images/steps/3.svg' fill={true} alt='' />
						</ImageWrapper>
						<Flex>
							<PartnersTitle>{t('Start_subtitle-3')}</PartnersTitle>
							<PartnersDescription>{t('Start_text-3')}</PartnersDescription>
						</Flex>
					</Flex>
				</Grid>
				<RedButton href='https://lk.pepper.partners/register'>
					{t('Start_button')}
				</RedButton>
			</Flex>
		</PaddedContainer>
	)
}
