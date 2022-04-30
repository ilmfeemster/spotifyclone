import Head from 'next/head'
import Image from 'next/image'
import GradientLayout from "../components/gradientLayout"
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
  <GradientLayout 
  roundImage="true"
  color="red" 
  subtitle="profile" 
  title="Immanuel Matthews" 
  description="15 public playlists"
  image="/spoofify_profile_pic.png">
    <div>home page</div>
  </GradientLayout>
  )
}

export default Home