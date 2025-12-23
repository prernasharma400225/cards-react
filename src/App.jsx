import React from 'react'
import './index.css'
import Cards from './components/cards'
// import './App.css'

function App() {

  const instagramProfiles = [
  {
    landscapeImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    name: "Aarav Mehta",
    details: "Senior Software Engineer @ Google",
    likes: "72.9k",
    posts: 823,
    views: "342.9K"
  },
  {
    landscapeImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    profileImage: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    name: "Neha Sharma",
    details: "UI/UX Designer @ Meta",
    likes: "65.4k",
    posts: 610,
    views: "298.1K"
  },
  {
    landscapeImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    profileImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    name: "Rohan Verma",
    details: "Product Manager @ Amazon",
    likes: "81.2k",
    posts: 945,
    views: "401.7K"
  },
  {
    landscapeImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    name: "Priya Nair",
    details: "Data Scientist @ Netflix",
    likes: "58.7k",
    posts: 512,
    views: "276.4K"
  },
  {
    landscapeImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    name: "Kunal Singh",
    details: "Cloud Engineer @ Apple",
    likes: "69.1k",
    posts: 734,
    views: "319.6K"
  },
  {
    landscapeImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    name: "Ananya Gupta",
    details: "Frontend Engineer @ Google",
    likes: "74.3k",
    posts: 688,
    views: "355.2K"
  },
  {
    landscapeImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    profileImage: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    name: "Siddharth Rao",
    details: "AI Engineer @ Meta",
    likes: "88.5k",
    posts: 1021,
    views: "489.3K"
  },
  {
    landscapeImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    profileImage: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef",
    name: "Ishita Kapoor",
    details: "Product Designer @ Amazon",
    likes: "61.8k",
    posts: 579,
    views: "264.8K"
  },
  {
    landscapeImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    profileImage: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    name: "Rahul Malhotra",
    details: "Backend Engineer @ Netflix",
    likes: "70.6k",
    posts: 801,
    views: "337.5K"
  },
  {
    landscapeImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    profileImage: "https://images.unsplash.com/photo-1545996124-0501ebae84d0",
    name: "Sneha Iyer",
    details: "Security Engineer @ Apple",
    likes: "55.9k",
    posts: 468,
    views: "243.9K"
  }
];





  return (
    <>
      <div className='p-10 bg-sky-950 w-full h-full flex gap-10 flex-wrap'>
        {instagramProfiles.map(function(elem){
          return <Cards bgimg={elem.landscapeImage} profile={elem.profileImage} name={elem.name} details={elem.details} like={elem.likes} post={elem.posts} view={elem.views}/>
        })}
        
      </div>
    </>
  )
}

export default App
