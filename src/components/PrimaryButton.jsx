import { motion } from 'framer-motion'
import { slideInFromBottom } from '../animations'
import styled from 'styled-components'

export const PrimaryButton = ({ name, onClick }) => {
  const PrimaryButton = styled.button`
  min-width: 180px;
    font-size: 12px;
    border-radius: 2px;
    border-bottom-right-radius: 30px;
    padding: 12px;
    background-color: #d12d3b;
    color: #fff;
  `

  return (
    <PrimaryButton
      as={motion.button}
      {...slideInFromBottom}
      transition={{ duration: 0.5, delay: 0.5 }}
      onClick={onClick}
    >
      {name}
    </PrimaryButton>
  )
}
