import nicoretteLogo from '/nicorette-logo.png'
import { styled } from 'styled-components'
import { useEffect, useRef, useState } from 'react'
import { IntroPage } from './pages/IntroPage'
import { CalcPage } from './pages/CalcPage'
import { ResultPage } from './pages/ResultPage'
import { FinalPage } from './pages/FinalPage'

const App = () => {
  const [currentPage, setCurrentPage] = useState('intro-page')

  const cigarettesNumbers = useRef()

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    align-items: center;
    position: absolute; 
    top: 0;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 100dvh;
    width: calc(100% - 40px);
    background-color: #2f6953;
    color: #fff;
    text-align: center;
  `

  const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    justify-content: space-between;
  `
  const NicoretteLogo = styled.img`
    width: 200px;
    padding-top: 20px;
  `

  const FooterText = styled.p`
    font-size: 12px;
  `

  const onPrimaryButtonClick = () => {
    setCurrentPage('result-page')
  }

  return (
    <MainContainer>
      <NicoretteLogo src={nicoretteLogo} />
      <InnerContainer>
        {currentPage === 'intro-page' && (
          <IntroPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === 'calc-page' && (
          <CalcPage
            setCurrentPage={setCurrentPage}
            onPrimaryButtonClick={onPrimaryButtonClick}
            ref={cigarettesNumbers}
          />
        )}
        {currentPage === 'result-page' && (
          <ResultPage
            setCurrentPage={setCurrentPage}
            cigarettesNumbers={cigarettesNumbers.current}
          />
        )}
        {currentPage === 'final-page' && <FinalPage />}
      </InnerContainer>
      <FooterText>
        Always read the label. Follow the directions for use. Stop smoking aid.
        Registered trademark. Cigarette cost basee on average price of Marlboro
        Read at Coles and Woolworths.
      </FooterText>
    </MainContainer>
  )
}

export default App
