const d=document,
  $defaultF=d.querySelector(".default-f"),
  $defaultLF=d.querySelector(".label-f"),
  $errorF=d.querySelector(".error-f"),
  $errorL=d.querySelectorAll(".label-err");

  $errorL[0].style.color=`#d32f2f`;

  d.addEventListener("focusin",e=>{
    if (e.target===$defaultF)$defaultLF.style.color="#2962ff";
    if (e.target===$errorF) $errorL[1].style.color="#d32f2f";
  })
  d.addEventListener("focusout",e=>{
    if (e.target===$defaultF) $defaultLF.style.color="black"
    if (e.target===$errorF) $errorL[1].style.color="black"
  })