const d=document,
  $defaultF=d.querySelector(".default-f"),
  $defaultLF=d.querySelector(".label-f"),
  $errorF=d.querySelector(".error-f"),
  $errorL=d.querySelectorAll(".label-err"),
  $disabledI=d.querySelectorAll(".disabled-in"),
  $extraText=d.querySelectorAll(".extra-text");
  
  d.addEventListener("DOMContentLoaded",e=>{
    $errorL[0].style.color=$errorL[2].style.color=`#d32f2f`;
    $disabledI.forEach(ele=>ele.disabled=true);
  })
  d.addEventListener("focusin",e=>{
    if (e.target===$defaultF)$defaultLF.style.color="#2962ff";
    if (e.target===$errorF) $errorL[1].style.color="#d32f2f";
    if (e.target=== $extraText[0].children[2]) text(0,$extraText);
    if (e.target=== $extraText[1].children[2]) text(1,$extraText);
  })
  d.addEventListener("focusout",e=>{
    if (e.target===$defaultF) $defaultLF.style.color="black";
    if (e.target===$errorF) $errorL[1].style.color="black";
    if (e.target=== $extraText[0].children[2]) removeText(0,$extraText);
    if (e.target=== $extraText[1].children[2]) removeText(1,$extraText);
  })

  function text(index){
    if (arguments[1][index].children.length<=3){
      let $para=d.createElement("p");
      $para.textContent=`Some interesting Text`;
      index==0? $para.classList.add("inte-text"):$para.classList.add("inte-text-err")
      $extraText[index].appendChild($para)
    }
  }

  function removeText(index){
    arguments[1][index].removeChild(arguments[1][index].lastElementChild);
  }