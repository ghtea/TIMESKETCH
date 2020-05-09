import { html, Component, render, useState} from '../../common/standalone.module.js';

import {g} from '../X.mjs';


function MakerWebsite({forceRerender, storeListWebsite}) {
  
  
  function handleAddBookmark(event) {
   /*event.stopPropagation();*/
   const inputTitle = document.querySelector(".divAddBookmark .inputTitle");
   const inputUrl = document.querySelector(".divAddBookmark .inputUrl");
  
  const listInputColor = document.querySelectorAll(".divAddBookmark .groupColor input");
   
  
  
  
  let numColorAdding = Math.floor(Math.random() * 9);
  
  for (var i=0;i<listInputColor.length;i++){
  if(listInputColor[i].checked == true){
      numColorAdding = parseInt(listInputColor[i].value);
  }
  }
   
   const objWebsite = {
    title: inputTitle.value,
    url: inputUrl.value, 
    color: numColorAdding,
    key: (Date.now()).toString(),
    lastClick: Date.now(),
    numberClick: 0,
    hp: 0.5
  };
  
  listWebsite.push(objWebsite);
  storeListWebsite();
  
  forceRerender();
}


  
   return html`
   
<div class="divAddBookmark">

    <div 
      class="groupInput">
      
        <input class="inputTitle" type="text" placeholder="title" />
        <input class="inputUrl" type="text" placeholder="url" />
        
    </div>
   
    
  <div 
    class="groupColor">
    
  ${g.listColor.map((hexColor, index) => html`
  <div
    style="background-color: ${hexColor}"
  >
    <input 
    type="radio" 
    name="color"
    value="${index}"
    onClick=${forceRerender}
    />
  </div>
  
  `)}
    
  </div>
    
    
    <div 
    class="btnAddBookmark"
    onClick=${handleAddBookmark}
    > + </div>
    
</div>

    `
  }


export {MakerWebsite};