import Header1 from './components/header/header1'
import Header2 from './components/header/header2'
import Header3 from './components/header/header3'
import { Box, CssBaseline } from '@mui/material'
import ThemeProvider from '@mui/system/ThemeProvider/ThemeProvider'
import { ColorModeContext , useMode } from '../src/theme'
import Hero from './components/hero/hero'
import IconSection from './components/hero/iconSection'
import Main from './components/main/main';
import Fotter from './components/foter/fotter';
import ScrolToTop from './components/scrol/scrolToTop'
function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider 
      // @ts-ignore
        value={colorMode}>
      <ThemeProvider 
        // @ts-ignore
          theme={theme}>
          <Header1/>
          <Header2/>
          <Header3/>
          <Box 
          bgcolor={theme.
// @ts-ignore
          palette.
// @ts-ignore
          bbg.main}
          >
            <Hero/>
            <IconSection/>
            <Main/>
            <Fotter/>
          </Box>
          <ScrolToTop/>
          
        <CssBaseline />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
