import Layout from '../components/Layout';

const MyError = ({ statusCode }) => (
  <Layout title="Error!">
    {statusCode
      ? `Could not load user data: Status Code ${statusCode}`
      : `Couldn't get that page, sorry!`}
  </Layout>
);

export default MyError;
