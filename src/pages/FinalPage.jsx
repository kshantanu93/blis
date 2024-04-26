import nicorettePack from '/nicorette-pack.png'

import { styled } from 'styled-components'
import { motion } from 'framer-motion'

import { PrimaryButton } from '../components/PrimaryButton'

export const FinalPage = () => {
  const AnimationContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  `

  const IntroHeading = styled.h2`
    font-size: 2em;
    font-weight: bold;
  `

  const NicorettePack = styled.img`
    width: 180px;
    padding-top: 20px;
  `

  const onTryNowClick = () => {
    window.open("https://www.nicorette.co.uk/useful-information/where-to-buy", "_blank")
  }

  return (
    <AnimationContainer
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <IntroHeading as={motion.div}>JOIN THE QUITTERS TODAY</IntroHeading>
      <NicorettePack src={nicorettePack} />
      <PrimaryButton
        name='TRY NOW'
        onClick={onTryNowClick}
      />
    </AnimationContainer>
  )
}
