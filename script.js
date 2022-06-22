"use strict";

const container = document.querySelector("#container");

const content = `
<p id="name">Name: <strong>Negar</strong></p>
<p id="height">Height: 160</p>
<p id="country">Country: Iran</p>`;

container.insertAdjacentHTML("afterbegin", content);
