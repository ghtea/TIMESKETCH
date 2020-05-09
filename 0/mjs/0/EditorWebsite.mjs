import { html, Component, render, useState} from '../../common/standalone.module.js';

import {g} from '../X.mjs';

import {Delete, Save} from '../../svg/basicIcons.mjs';


function EditorWebsite({forceRerender, storeListWebsite}) {
  
  
  function handleSaveBookmark(event) {
   
  const keyCommon = g.editingKey;
  
  const iWebsite = listWebsite.findIndex(function(itemEach) {
    return itemEach.key === keyCommon;
  });
   
   const inputTitle = document.querySelector(".divEditBookmark .inputTitle");
   const inputUrl = document.querySelector(".divEditBookmark .inputUrl");
  
  const listInputColor = document.querySelectorAll(".divEditBookmark .groupColor input");
  
  
  
  let numColorAdding = listWebsite[iWebsite]["color"];
  
  for (var i=0;i< listInputColor.length;i++){
  if(listInputColor[i].checked === true){
      numColorAdding = parseInt(listInputColor[i].value);
    }
  }
   
  listWebsite[iWebsite]["title"] = inputTitle.value;
  listWebsite[iWebsite]["url"] =  inputUrl.value;
  listWebsite[iWebsite]["color"] = numColorAdding;
  
  storeListWebsite();
  
  forceRerender();
}


function deleteThisItem(e) {
  
  /*event.stopPropagation();*/
  const btn = e.currentTarget;
  
  const keyCommon = btn.getAttribute("data-key");
  
  
  const item = document.querySelector('.itemWebsite[data-key="'+keyCommon+'"]');

  
  const list = document.getElementsByClassName("divListWebsite")[0];
  
  
  listWebsite = listWebsite.filter(function(itemEach) {
    return itemEach.key !== keyCommon;
  });
  
  storeListWebsite();
    
  item.remove();

  }
  
  
  
   return html`
   
<div 
  class="divEditBookmark"
  style="visibility: ${g.editingTf ? "visibile" : "hidden"};"
>

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
    
    <div class="groupBtnEdit">
    <div 
    class="btnSave"
    onClick=${handleSaveBookmark} 
    > 
    <${Save} />
    
    </div>
    
    
    <div 
    class="btnDelete"
    data-key="${g.editingKey}"
    onClick=${deleteThisItem}> 
    <${Delete} />
    </div>
    </div>
    
</div>
    `
  }


export {EditorWebsite};