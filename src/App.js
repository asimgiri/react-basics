import React from 'react';
import './App.css';
import AccordionList from './components/Accordion/AccordionList';
import DropDown from './components/DropDown/DropDown';

var accordionItems = [
  {
    title: "Title for the Accordion",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, perspiciatis deserunt ex neque quis ea odit autem eum reiciendis? Sed dolorum, vel ad perspiciatis asperiores delectus dolor vero cum pariatur."
  },
  {
    title: "Title for the Accordion",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, perspiciatis deserunt ex neque quis ea odit autem eum reiciendis? Sed dolorum, vel ad perspiciatis asperiores delectus dolor vero cum pariatur."
  },
  {
    title: "Title for the Accordion",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, perspiciatis deserunt ex neque quis ea odit autem eum reiciendis? Sed dolorum, vel ad perspiciatis asperiores delectus dolor vero cum pariatur."
  },
  {
    title: "Title for the Accordion",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, perspiciatis deserunt ex neque quis ea odit autem eum reiciendis? Sed dolorum, vel ad perspiciatis asperiores delectus dolor vero cum pariatur."
  }
]

function App() {
  return (
    <div className="App">
      <DropDown
        first_link="Some Link"
        second_link="Another Link"
        third_link="Something Else"
        forth_link="Cretain Actions"
        fifth_link="Settings"
      />

      <AccordionList
        items={accordionItems}
      />
    </div>
  );
}

export default App;
