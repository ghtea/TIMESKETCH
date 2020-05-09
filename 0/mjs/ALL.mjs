import { html, Component, render, useState} from '../common/standalone.module.js';

import {MAIN} from './MAIN.mjs';

/*
function loadListWebsite() {
  
  const loadedListWebsite = localStorage.getItem("listWebsite");
  
  if (loadedListWebsite !== null) {
    const parsedListWebsite = JSON.parse(loadedListWebsite);
    
   listWebsite = parsedListWebsite;
  }
  
  else {
   listWebsite = [];
  }
}
*/
 
 
/* components */
function ALL() {

  const [numRerender, setRerender] = useState(0);
  
  function forceRerender() {
   setRerender(numRerender + 1);
  }
  
  /*
  function storeListWebsite() {
localStorage.setItem("listWebsite", JSON.stringify(listWebsite));
  }
  */
  
  

  return html`
  <${MAIN}  
forceRerender=${forceRerender}
  />
  `
}
/*
storeListWebsite=${storeListWebsite}
*/

export {ALL}

   
