import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import {
  slideInFromBottom,

} from '../animations'

export const ResultPage = ({ setCurrentPage, cigarettesNumbers }) => {
  const AnimationContainer = styled(motion.div)``

  const IntroHeading = styled.h2`
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 20px;
  `

  const AmountHeading = styled.h1`
    font-size: 3em;
    color: #fffbb0;
    font-weight: bold;
  `

  const BoughtWithHeading = styled.h1`
    font-size: 1.8rem;
    margin-top: 12px;
    color: #fffbb0;
    line-height: 1em;
    font-weight: bold;
  `

  const costOfCigarettesInAnYear = Math.floor(cigarettesNumbers * 12 * 45.78)

  const onAnimationComplete = () => {
    setTimeout(() => setCurrentPage('final-page'), 2500)
  }

  // const resultMap = {
  //   10: {},

  //   100: {}
  // }

  return (
    <AnimationContainer
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <IntroHeading as={motion.div}>
        In one year, you could have saved:
      </IntroHeading>

      <AmountHeading
        as={motion.div}
        animate={{ rotate: 360 }}
        transition={{ type: 'spring' }}
      >
        ${costOfCigarettesInAnYear}
      </AmountHeading>

      <IntroHeading
        as={motion.div}
        {...slideInFromBottom}
        transition={{ ease: 'easeOut', duration: 0.75, delay: 1.75 }}
      >
        That&apos;s the equivalent of:
      </IntroHeading>

      <BoughtWithHeading
        as={motion.div}
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
        transition={{ ease: 'easeOut', delay: 3.25 }}
        onAnimationComplete={onAnimationComplete}
      >
        12 months rent on a 2 bedroom apartment on the Sunshine Coast
      </BoughtWithHeading>
    </AnimationContainer>
  )
}
