import styled from 'styled-components'

export const Heading = styled.h2<{ $maxWidth?: string }>`
	font-family: var(--font-encode-sans-sc);
	font-size: 1.875rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-transform: capitalize;
	max-width: ${props => props.$maxWidth};

	@media screen and (min-width: 764px) {
		font-size: 5rem;
	}
`
