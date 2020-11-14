import { useRouter } from 'next/router';

import Layout from '../components/Layout';

const Post = (props) => {
  const router = useRouter();
  return (
    <Layout title={router.query.title}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab dolore
        soluta quae quis magni quaerat minus quam deleniti nisi excepturi
        maiores eligendi suscipit eos consequuntur dolorem, tenetur fugiat esse
        dolor.
      </p>
    </Layout>
  );
};

export default Post;
