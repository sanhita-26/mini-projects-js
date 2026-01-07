function rollDice() {
  const numofDice = document.getElementById("numofDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const proSum = document.getElementById("proSum");
  const values = [];
  const images = [];

  if (numofDice < 1 || numofDice > 6) {
    alert("Please enter a number between 1 and 6");
    return;
  }

  for (let i = 0; i < numofDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    values.join(",");
    images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
  }

  const sum = values.reduce((a, b) => a + b, 0);
  const product = values.reduce((a, b) => a * b, 1);

  diceResult.textContent = `Dice Values Are: ${values.join(",")}`;
  diceResult.innerHTML = `
        <p>Dice: ${values.join(", ")}</p>
        <p>Sum: ${sum}</p>
        <p>Product: ${product}</p>
    `;

  diceImages.innerHTML = images.join(" ");
}
