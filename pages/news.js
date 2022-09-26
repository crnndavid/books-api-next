import Post from "../components/posts/Post";
const news = ({ posts }) => {
  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>

      {posts.map((post) => (
        <Post
          key={Math.random() * 100000}
          title={post.title}
          author={post.author}
          link={post.url}
          content={post.content}
        />
      ))}
    </div>
  );
};

export default news;

export const getStaticProps = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=Javascript&fr&language=fr&apiKey=${process.env.NEWS_API_KEY}`
  );
  const posts = await response.json();
  console.log(posts.articles);
  return {
    props: {
      posts: posts.articles,
    },
  };
};
