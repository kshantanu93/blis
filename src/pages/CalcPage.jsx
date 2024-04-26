import { styled } from 'styled-components'
import { motion } from 'framer-motion'
import { slideInFromRight } from '../animations'
import { PrimaryButton } from '../components/PrimaryButton'
import { forwardRef } from 'react'

export const CalcPage = forwardRef(
  ({ setCurrentPage, onPrimaryButtonClick }, ref) => {
    const IntroHeading = styled.h1`
      font-size: 2em;
      font-weight: bold;
    `

    const CigarettesNumberInput = styled.input`
      padding: 12px 20px;
      text-align: center;
    `

    return (
      <>
        <IntroHeading as={motion.div} {...slideInFromRight}>
          How many packs of cigarettes do you buy in a month?
        </IntroHeading>
        <CigarettesNumberInput
          placeholder='Enter the number here'
          onChange={e => (ref.current = e.target.value)}
        />
        <PrimaryButton
          name='CALCULATE YOUR SAVINGS'
          setCurrentPage={setCurrentPage}
          onClick={onPrimaryButtonClick}
        />
      </>
    )
  }
)

CalcPage.displayName = 'CalcPage'
