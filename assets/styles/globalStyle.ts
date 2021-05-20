import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    width: 100%;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  #root {
    height: 100%;
  }
`

export default GlobalStyle
