import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Items from '../components/Items'


export default function Home() {

  return (
    <div>
    <Navbar> </Navbar>
    <Items></Items>
    <Footer> </Footer>
    </div>
  )
}
