import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';

class About extends Component {
  // state = { user: null };

  static async getInitialProps() {
    const response = await fetch('https://api.github.com/users/reedbarger');
    const data = await response.json();

    return { user: data };
  }

  // componentDidMount() {
  //   fetch('https://api.github.com/users/reedbarger')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ user: data });
  //     });
  // }

  render() {
    const { user } = this.props;
    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Reed" height="200px" />
      </Layout>
    );
  }
}

export default About;
