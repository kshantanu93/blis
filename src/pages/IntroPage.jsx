import tv from '/tv.svg'
import suitcase from '/suitcase.svg'
import car from '/car.svg'
import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { PrimaryButton } from '../components/PrimaryButton'
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight
} from '../animations'

export const IntroPage = ({ setCurrentPage }) => {
  const IntroHeading = styled.h1`
    font-size: 2em;
    font-weight: bold;
    text-align: center;
  `
  const TvSuitcaseCarContainer = styled.div``

  const TvSuitcaseContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
  `
  const TV = styled.img`
    width: 160px;
  `
  const Suitcase = styled.img`
    width: 80px;
  `
  const Car = styled.img`
    width: 220px;
  `

  const onPrimaryButtonClick = () => setCurrentPage('calc-page')

  return (
    <>
      <IntroHeading as={motion.div} {...slideInFromRight}>
        Imagine what you could buy if you quit....
      </IntroHeading>
      <TvSuitcaseCarContainer>
        <TvSuitcaseContainer>
          <TV src={tv} as={motion.img} {...slideInFromLeft} />
          <Suitcase as={motion.img} src={suitcase} {...slideInFromRight} />
        </TvSuitcaseContainer>
        <Car src={car} as={motion.img} {...slideInFromBottom} />
      </TvSuitcaseCarContainer>
      <PrimaryButton
        name='CALCULATE YOUR SAVINGS'
        onClick={onPrimaryButtonClick}
        pageToNavigate='calc-page'
      />
    </>
  )
}
