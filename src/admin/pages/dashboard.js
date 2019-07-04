import App from '../components/App'
import { getPosts } from '../resources/API'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  static async getInitialProps ({ req }) {
    try {
      let response = await getPosts()
      let posts = response.data
      return { error: '', posts }
    } catch (e) {
      return { error: 'Unable to reach API', posts: [] }
    }
  }

  render () {
    return (<App>
      {this.props.error &&
      
      /* Show error */
      (
        <div className='errorMessage'>{this.props.error}</div>
      )
      
      /* List posts */
      || 
        
        JSON.stringify(this.props.posts, null, 2)
        
      }
    </App>)
  }
}

export default Dashboard
