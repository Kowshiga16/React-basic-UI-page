import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Hero from './components/Hero' 
import Header from './components/Header'
import Navbar from './components/Navbar' 
import Article from './components/article'
import Table  from './components/Table'
import Aside from './components/Aside'
import Footer from './components/Footer'
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <Navbar></Navbar>
    <Header></Header>
    <Hero></Hero>
    <div className="container flex flex-col md:flex-row mx-auto p-6">
      <main className='flex-1'>
 <Article></Article>
    <Table></Table>
     </main>
    <Aside></Aside>
     
  
    </div>
 <Footer></Footer>
    </>
  )
}
