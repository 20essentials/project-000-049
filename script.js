const d = document,
  $template = d.querySelector(".myBox").content,
  fragment = d.createDocumentFragment();

let contador = 0;

d.addEventListener("click", (e) => {
  if (e.target.matches(".box-padre") && contador === 2) {
    for (let i = 0; i < e.target.children.length; i++) {
      for (let j = 0; j < 9; j++) {
        adddNineChildren(e.target.children[i].children[j]);
      }
    }
    contador++;
  }
  if (e.target.matches(".box-padre") && contador === 1) {
    for (let i = 0; i < e.target.children.length; i++) {
      adddNineChildren(e.target.children[i]);
    }
    contador++;
    console.log(contador);
  }
  if (e.target.matches(".box-padre") && contador === 0) {
    adddNineChildren(e.target);
    contador++;
  }
});

function adddNineChildren(padre) {
  for (let i = 0; i < 9; i++) {
    $template.querySelector(".box").classList.add("extend");

    let $clon = d.importNode($template, true);
    fragment.appendChild($clon);
  }

  padre.appendChild(fragment);
  fragment.textContent = "";
}
