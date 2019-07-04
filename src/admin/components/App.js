import Head from 'next/head'

import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, makeStyles } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import '../assets/scss/base.scss'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#090'
    },
    primary: {
      main: '#f70'
    }
  }
})

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

const App = (props) => {
  const classes = useStyles()
  let showTopnav = props.showTopnav === undefined ? true : props.showTopnav
  console.log('showTopnav', showTopnav)

  return (
    <div>
      <Head>
        <title>Blog Manager</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no'
        />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      </Head>

      <ThemeProvider theme={theme}>

        {showTopnav && (
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        )}

        {props.children}
      </ThemeProvider>
    </div>
  )
}

export default App
