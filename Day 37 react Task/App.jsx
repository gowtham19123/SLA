import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './assets/Counter'
import H1 from './assets/H1'
import Student from './assets/Student'
import Child from './assets/Child'
import Products from './assets/Products'
import Header from './assets/Header'
import Footer from './assets/Footer'
import Layout from './assets/Layout'
import Usercard from './assets/Usercard'
import Input from './assets/Input'
import Lable from './assets/Lable'
import Oninput from './assets/Oninput'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Lable labelname="password"/>
     <Input type="password" placeholder="Password" />
     <Oninput/>

       {/* <Counter/>
       <Header title="React header"/>
       <Footer credits="@2014 react copyright"/>
       <Layout pagetitle=" Layout Home Page" footerNote="@2026 layout site" childern=" Body of the page"/>
       <Usercard ep_id="123" name="Sam" date_of_birth="12-02-1965"/> */}
       {/* <H1/>
      <Student name="Harry" id="123"/>
       <Child/>
       <Products>
        <h1>TV</h1>
        <h1> AC</h1>
        <h1> Washing machine</h1>
      </Products>  */}
   
    </> 
  );

}
export default App
