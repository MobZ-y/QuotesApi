const results = document.querySelector(".quotesSections");
const btn = document.querySelector("button");
let datastore = [];
let value = 4;

async function fetchYea() {
  await fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      datastore = data;
      console.log(datastore);
      display();
    });
}

function display() {
  results.innerHTML = datastore = `
  <div class="card">
  <h2>${datastore[value].text}</h2>
  <h4>${datastore[value].author}</h4>
</div>
`;
}

btn.addEventListener("click", () => {
  value = Math.ceil(Math.random() * 182);
  console.log(value);
  display();
});

window.addEventListener("load", fetchYea());
