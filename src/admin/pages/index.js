import Link from 'next/link'
import App from '../components/App'
import Container from '@material-ui/core/Container'

const Index = () => (
  <App>
    <Container className="warningBox" maxWidth='xs'>
      <div className='warningBox-content'>
        <h3>Warning!</h3>

        <p>
          This project is under development and you should not use
          in production yet.
        </p>

        <Link href='/dashboard'>
          <button>Accept and procceed</button>
        </Link>
      </div>
    </Container>
  </App>
)

export default Index
