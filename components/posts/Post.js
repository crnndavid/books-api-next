import Link from "next/link";
const Post = ({ title, author, link, content }) => {
  return (
    <div className="post-container">
      <h3>{title}</h3>
      <span>{author}</span>
      <p>{content}</p>
      <a href={link}>Lien vers larticle</a>
    </div>
  );
};

export default Post;
