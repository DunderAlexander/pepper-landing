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

const Break = styled.div`
	height: 100%;
	width: 1.5px;
	margin-inline: 1rem;
	background: var(
		--Red-Gradient,
		linear-gradient(180deg, #ed1c24 0%, rgba(237, 28, 36, 0) 100%)
	);
	@media screen and (min-width: 764px) {
		margin-inline: 4.44rem;
	}
`

const PartnersText = styled.p`
	font-size: 0.9375rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	text-transform: uppercase;
	padding-inline: 1.25rem;
	font-weight: 300;
	@media screen and (min-width: 764px) {
		padding-inline: 0;
		font-size: 2.5rem;
	}
`

export const PartnersDescription = () => {
	return (
		<PaddedContainer>
			<Flex $mobileGap='1.88rem' $desktopGap='6.25rem'>
				<Heading $maxWidth='78rem'>
					Your trusted partner in gambling and betting affiliate marketing
				</Heading>
				<Description>Pepper Partners focus on what truly matters:</Description>
				<Grid
					$mobileCols='1fr max-content 1fr'
					$desktopCols='1fr max-content 1fr'
				>
					<Flex $row={true} $desktopGap='4.44rem' $mobileGap='.75rem'>
						<Image
							src='/images/pepper-graph.svg'
							width={75}
							height={96}
							alt=''
						/>
						<Description>
							Ensuring your traffic are both effective and secure.
						</Description>
					</Flex>
					<Break />
					<Flex $row={true} $desktopGap='4.44rem' $mobileGap='.75rem'>
						<Image
							src='/images/pepper-graph.svg'
							width={75}
							height={96}
							alt=''
						/>
						<Description>
							Connecting you with skilled affiliates in the gambling and betting
							sectors
						</Description>
					</Flex>
				</Grid>
				<PartnersText>
					<strong>With Pepper Partners</strong>, you get more than just an
					affiliate marketing service; you gain a dependable ally in navigating
					the complex world of online gambling and betting marketing.
				</PartnersText>
				<Grid
					$mobileCols='1fr max-content 1fr'
					$desktopCols='1fr max-content 1fr'
				>
					<Flex $row={true} $desktopGap='4.44rem' $mobileGap='.75rem'>
						<Description $fontSizeDesktop='1.5625rem' $fontSizeMobile='.625rem'>
							Our approach is all about giving you the flexibility to explore
							different collaboration methods and instruments, which can lead to
							better retention and increased value.
						</Description>
					</Flex>
					<Break />
					<Flex $row={true} $desktopGap='4.44rem' $mobileGap='.75rem'>
						<Description $fontSizeDesktop='1.5625rem' $fontSizeMobile='.625rem'>
							We are dedicated to excellence and security. Our in-house
							anti-fraud team works tirelessly to safeguard your product against
							fraudulent traffic, ensuring that the integrity of your operations
							is never compromised.
						</Description>
					</Flex>
				</Grid>
			</Flex>
		</PaddedContainer>
	)
}
