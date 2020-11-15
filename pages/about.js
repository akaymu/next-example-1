import { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import Error from './_error';
import Layout from '../components/Layout';

class About extends Component {
  // state = { user: null };

  static async getInitialProps() {
    const response = await fetch('https://api.github.com/users/akaymu');
    const statusCode = response.status > 200 ? response.status : false;
    const data = await response.json();

    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Reed" height="200px" />
      </Layout>
    );
  }
}

export default About;
