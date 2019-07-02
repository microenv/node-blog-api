import App from '../components/App'
import { getPosts } from '../resources/API'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  static async getInitialProps({ req }) {
    let response = await getPosts()
    let posts = response.data
    return { posts }
  }

  render () {
    return (<App>
      { JSON.stringify(this.props.posts, null, 2) }
    </App>)
  }
}

export default Dashboard
