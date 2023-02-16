import Layout from '../../components/layout';
import { getAllPostIds,getPostData  } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
//getStaticPaths 和 getStaticProps永远不会在客户端运行，也不会打包进js文件
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {

    const postData = await getPostData(params.id);//这里的ID来自文件名的值
    return {
      props: {
        postData,
      },
    };
  }