import { useRouter, withRouter } from 'next/router';

import Layout from '../components/Layout';

const Post = ({ router }) => {
  return (
    <Layout title={router.query.title}>
      <p style={{ width: '80vw' }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab dolore
        soluta quae quis magni quaerat minus quam deleniti nisi excepturi
        maiores eligendi suscipit eos consequuntur dolorem, tenetur fugiat esse
        dolor.
      </p>
    </Layout>
  );
};

export default withRouter(Post);

// Burada useRouter da kullanılabilir.
// Eğer withRouter ile encapsulate etmek istemezsek;
// const router = useRouter();
// title={router.query.title} kullanabiliriz.
