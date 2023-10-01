import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Anushka Yadav",
      userId: 1,
      profilePic:
      "https://media.licdn.com/dms/image/D5603AQF8tZgOdwOqLQ/profile-displayphoto-shrink_400_400/0/1695380331797?e=1700697600&v=beta&t=O9dWhWI8YneBb1-Nlah6ggMkBnlED-Kayfv8Ubx-MR8",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Anushka Yadav",
      userId: 2,
      profilePic:
      "https://media.licdn.com/dms/image/D5603AQF8tZgOdwOqLQ/profile-displayphoto-shrink_400_400/0/1695380331797?e=1700697600&v=beta&t=O9dWhWI8YneBb1-Nlah6ggMkBnlED-Kayfv8Ubx-MR8",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;