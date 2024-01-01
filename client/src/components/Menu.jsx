import React from "react";

export default function Menu() {
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
  ];
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt={post.title} />
          <h2>{post.title}</h2>
          <button>Red more</button>
        </div>
      ))}
    </div>
  );
}
