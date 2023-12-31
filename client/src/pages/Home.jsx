import { Link } from "react-router-dom";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Exploring Nature's Beauty",
      description:
        "Witness the serene landscapes and vibrant colors of nature's canvas. Embrace the tranquility!",
      img: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Culinary Delights: A Gastronomic Journey",
      description:
        "Savor the exquisite flavors from around the world. Let your taste buds embark on an unforgettable adventure!",
      img: "https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Adventures in the Wild",
      description:
        "Experience adrenaline-pumping adventures in the heart of untamed wilderness. Dare to explore!",
      img: "https://images.pexels.com/photos/5272925/pexels-photo-5272925.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Artistic Marvels: A Visual Feast",
      description:
        "Immerse yourself in the world of art, where creativity knows no bounds. Let your imagination soar!",
      img: "https://images.pexels.com/photos/19526757/pexels-photo-19526757/free-photo-of-photo-of-painted-fish.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Mindfulness and Meditation",
      description:
        "Discover the transformative power of mindfulness. Find inner peace through meditation practices.",
      img: "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      title: "Tech Innovations: Shaping the Future",
      description:
        "Witness groundbreaking technological advancements shaping our world. Embrace the future!",
      img: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      title: "Celebrating Diversity",
      description:
        "Embrace diversity and inclusivity. Celebrate the richness of different cultures and perspectives!",
      img: "https://images.pexels.com/photos/6405771/pexels-photo-6405771.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      title: "Fitness & Wellness: A Holistic Approach",
      description:
        "Prioritize your health with holistic fitness routines. Embrace wellness for a balanced life!",
      img: "https://images.pexels.com/photos/8534279/pexels-photo-8534279.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 9,
      title: "Exploring Space: Beyond the Stars",
      description:
        "Embark on a cosmic journey to unravel the mysteries of the universe. Venture into the unknown!",
      img: "https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 10,
      title: "Fashion Fusion: Where Style Meets Creativity",
      description:
        "Experience the intersection of style and innovation. Redefine fashion with creative fusion!",
      img: "https://images.pexels.com/photos/19515318/pexels-photo-19515318/free-photo-of-portrait-of-young-beautiful-woman-in-sweater.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="content">
              <Link to={`/post/${post.id}`} className="link">
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button>Red more</button>
            </div>
          </div>
        ))}
        {/* <h1>Home</h1> */}
      </div>
    </div>
  );
}
