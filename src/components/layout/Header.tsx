'use client'

import {
	BurgerButton,
	BurgerMenu,
	ButtonContainer,
	ButtonLanguages,
	HeaderContainer,
	HeaderStyled,
	LogoButton,
} from '../styles/Header.styled'
import LogoIcon from '/public/logo.svg'
import BurgerIcon from '/public/burger.svg'
import GlobeIcon from '/public/globe.svg'
import { Nav } from '../styles/Nav.styled'
import { Button } from '../styles/Button.styled'
import { useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { usePathname, useRouter } from 'next/navigation'
import i18nConfig from '@/i18nConfig'
import { LangDropdown } from '../ui/LangDropdown'

export const Header = () => {
	const { t } = useTranslation()
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)
	const { i18n } = useTranslation()
	const currentLocale = i18n.language
	const router = useRouter()
	const currentPathname = usePathname()

	const handleChange = newLocale => {
		const days = 30
		const date = new Date()
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
		const expires = date.toUTCString()
		document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

		if (
			currentLocale === i18nConfig.defaultLocale &&
			!i18nConfig.prefixDefault
		) {
			router.push('/' + newLocale + currentPathname)
		} else {
			router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
		}

		router.refresh()
	}

	return (
		<HeaderStyled>
			<HeaderContainer>
				<LogoButton href='/'>
					<LogoIcon />
					<p>PepperPartners</p>
				</LogoButton>
				<Nav>
					<ul>
						<li>
							<Link href='/partners'>{t('default:Header_item-1')}</Link>
						</li>
						{/* <li>
              <Link href="/about-us">{t("default:Header_item-2")}</Link>
            </li>
            <li>
              <Link href="/blog">{t("default:Header_item-3")}</Link>
            </li> */}
						<li>
							<LangDropdown handleChange={handleChange} />
						</li>
					</ul>
				</Nav>
				<ButtonContainer>
					<Button href='https://lk.pepper.partners/auth' $primary={true}>
						{t('default:Header_button_login')}
					</Button>
					<Button href='https://lk.pepper.partners/register'>
						{t('default:Header_button_signup')}
					</Button>
				</ButtonContainer>
				<BurgerButton onClick={() => setIsBurgerOpen(prev => !prev)}>
					<BurgerIcon />
				</BurgerButton>
				<BurgerMenu $isOpen={isBurgerOpen}>
					<ul>
						<li>
							<Link href='/partners'>{t('default:Header_item-1')}</Link>
						</li>
						{/* <li>
              <Link href="/about-us">{t("default:Header_item-2")}</Link>
            </li>
            <li>
              <Link href="/blog">{t("default:Header_item-3")}</Link>
            </li> */}
					</ul>
					<div>
						<ButtonLanguages onClick={() => handleChange('en')}>
							English
						</ButtonLanguages>
						<ButtonLanguages onClick={() => handleChange('ru')}>
							Russian
						</ButtonLanguages>
						<ButtonLanguages onClick={() => handleChange('ua')}>
							Ukranian <GlobeIcon />
						</ButtonLanguages>
					</div>
				</BurgerMenu>
			</HeaderContainer>
		</HeaderStyled>
	)
}
