import React from 'react';
import logo from './logo.svg';
import './App.css';
import Couter from './Components/Couter';
import User from './Components/User';
import Users from './Components/Users';

let student: string = 'Jeff';
let age: number = 69;
let isSmart: boolean = true;

let students: string[] = ['Joe', 'Biden', 'Harris']; 
let fees: number[] = [12,45,78,12,45];

interface Person {
  name: string ,
  job?: string,
  employed: string | boolean, 
  age: number,
  location?: string | number
}

const person: Person = {
  name: 'Bill Clinton',
  employed: true,
  age: 85,
  location: 55
}


function App() {
  return (
    <div className="App">
     <Couter></Couter>
     <Users></Users>
    </div>
  );
}

export default App;
