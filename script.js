function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function dropToContinent(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const element = document.getElementById(data);
  let target = ev.target;
  while (!target.classList.contains('continent-dropzone') && target !== document.body) {
    target = target.parentElement;
  }
  if (target.classList.contains('continent-dropzone')) {
    target.appendChild(element);
  }
}

function dropToPool(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const element = document.getElementById(data);
  document.getElementById("pool").appendChild(element);
}

function checkAnswers() {
  const zones = ['america', 'asia', 'europa', 'africa', 'oceania'];
  let correctCount = 0;
  let totalCountries = 5;

  zones.forEach(zoneId => {
    const zone = document.getElementById(zoneId);
    const items = zone.getElementsByClassName('country-item');
    for (let item of items) {
      if (item.getAttribute('data-continent') === zoneId) {
        correctCount++;
      }
    }
  });

  const resultEl = document.getElementById("result");
  if (correctCount === totalCountries) {
    resultEl.style.color = "#2ea043";
    resultEl.textContent = `Parabéns! Acertaste todos os ${totalCountries} países!`;
  } else {
    resultEl.style.color = "#f85149";
    resultEl.textContent = `Acertaste ${correctCount} de ${totalCountries}. Tenta novamente!`;
  }
}