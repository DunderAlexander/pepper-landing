'use client'

import { useTranslation } from 'react-i18next'
import { Flex } from '../styles/Container.styled'
import {
	AffiliateBox,
	AffiliateCard,
	BgContainer,
	Fire,
	HeadingHero,
	HeroButton,
	HeroContainer,
	HeroDescription,
	MainContent,
	SecondaryHeading,
} from '../styles/Hero.styled'

export const Hero = ({ type }: { type?: string }) => {
	const { t } = useTranslation()

	return (
		<section>
			<HeroContainer>
				<BgContainer>
					<Fire src='/images/bg-fire.png' alt='fire' fill={true} />
				</BgContainer>
				<MainContent>
					<HeadingHeroSplit fullTitle={t('Hero_title')} />
					<HeroDescription>{t('Hero_description')}</HeroDescription>
					<HeroButton href='https://lk.pepper.partners/register'>
						{t('Hero_button')}
					</HeroButton>
				</MainContent>
				<Flex $mobileGap='2.19rem' $desktopGap='8.94rem' $alignItems='center'>
					<SecondaryHeading>{t('default:Hero_bottom_text')}</SecondaryHeading>
					<AffiliateBox>
						<AffiliateCard>
							<h3>14K+</h3>
							<p>{t('default:Hero_numbers_description-1')}</p>
						</AffiliateCard>
						<AffiliateCard>
							<h3>40K+</h3>
							<p>{t('default:Hero_numbers_description-2')}</p>
						</AffiliateCard>
						<AffiliateCard>
							<h3>150K+</h3>
							<p>{t('default:Hero_numbers_description-3')}</p>
						</AffiliateCard>
						<AffiliateCard>
							<h3>2K+</h3>
							<p>{t('default:Hero_numbers_description-4')}</p>
						</AffiliateCard>
					</AffiliateBox>
				</Flex>
			</HeroContainer>
		</section>
	)
}

const HeadingHeroSplit = ({ fullTitle }) => {
	const words = fullTitle.split(' ')

	const firstPart = words.slice(0, 2).join(' ')
	const secondPart = words.slice(2).join(' ')

	return (
		<HeadingHero>
			<span>{firstPart}</span>
			<span>{secondPart}</span>
		</HeadingHero>
	)
}
