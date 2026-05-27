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
import Vote from './assets/Vote'
import Listkey from './assets/Listkey'
import Effecthook from './assets/Effecthook'
import Counterreduce from './assets/Counterreduce'
import Focusinput from './assets/Focusinput'
import Effectwithdependency from './assets/Effectwithdependency'
import EffectOnce from './assets/EffectOnce'
import Effectwithapi from './assets/Effectwithapi'
import List_product from './assets/List_product'
import Fromhandling from './assets/Fromhandling'
import Inputtext from './assets/Inputtext'
import { Route, Routes ,Link} from 'react-router-dom'
import HomePage from './assets/HomePage'
import AboutPage from './assets/AboutPage'
import ServicesPage from './assets/ServicesPage'
import NavigateDemo from './assets/NavigateDemo'
import TailwindHTML from './assets/TailwindHTML'
import Signup from './assets/Signup'
import Formtailwind from './assets/Formtailwind'
import Todoapp from './assets/TOdoapp'
import Useeffectfetch from './assets/Useeffectfetch'
import MuiButton from './assets/muiButton'
import MuiBox from './assets/MuiBox'
import MuiCheckBox from './assets/MuiCheckBox'
import NavBrowserRouter from './assets/NavBrowserRouter'
import MuiRadio from './assets/MuiRadio'
import TailwindCard from './assets/TailwindCard'
import TailwindNav from './assets/TailwindNav'
import TailwindButton from './assets/TailwindButton'
import MuiLogin from './assets/MuiLogin'
import MuiCardTask from './assets/MuiCardTask'
import UseRef from './assets/UseRef'
import MuiForm from './assets/MuiForm'
import Weather from './assets/Weather'
import Calculator from './assets/Calculator'
import MuiSwitch from './assets/MuiSwitch'

import { increment } from './assets/counterSlice'
import { decrement } from './assets/counterSlice'
import {useSelector,useDispatch} from 'react-redux'
import Todos from './assets/Todos'
function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() =>dispatch(increment())}>+</button>
      <button onClick={() =>dispatch(decrement())}>-</button>
     


    <Todos/>






















     {/* <MuiRadio/> */}
     {/* <MuiSwitch/> */}
      {/* <Weather/> */}
     {/* <MuiForm/>
     <MuiLogin/> 
     <MuiCardTask/> */}
      {/* <UseRef/> */}
      {/* <TailwindNav/>
      <TailwindCard name="Harry" contact="123456789"/>
      <TailwindButton/> */}
    {/* <NavBrowserRouter/> */}
    {/* <MuiCheckBox/> */}
    {/* <MuiBox/> */}
    {/* <MuiButton/> */}
    {/* <Useeffectfetch/> */}
      {/* <Todoapp/> */}
      {/* <Formtailwind/> */}
    {/* <TailwindHTML/> */}

     {/* <Signup/> */}
    {/* <nav>
      <Link to="/" > Home</Link>{' | '}
      <Link to="/About" > About </Link>{' | '}
      <Link to="/Services" > Services </Link>
    </nav> */}
    {/* <NavigateDemo/>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/About' element={<AboutPage/>}/>
    <Route path='/Services' element={<ServicesPage/>}/>
  </Routes> */}
    {/* <Inputtext type="text" placeholder="enter a name" onChange={ ((e) => setname(e.target.value) )}/> */}
    {/* <Student name="Harry" id="123"/> */}
    {/* <Fromhandling/> */}
    {/* <List_product/> */}
    {/* <Effectwithapi/> */}
    {/* <EffectOnce/> */}
    {/* <Effectwithdependency/> */}
    {/* <Counterreduce/>
    <Focusinput/> */}
    {/* <Effecthook/> */}
    {/* <Listkey/> */}
    {/* <Vote/> */}
     {/* <Lable labelname="password"/>
     <Input type="password" placeholder="Password" />
     <Oninput/> */}

       {/* <Counter/>
       <Header title="React header"/>
       <Footer credits="@2014 react copyright"/>
       <Layout pagetitle=" Layout Home Page" footerNote="@2026 layout site" childern=" Body of the page"/>
       <Usercard ep_id="123" name="Sam" date_of_birth="12-02-1965"/> */}
       {/* <H1/>
      
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
