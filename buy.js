let total = 0;

function handleclickbtn(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.parentNode.querySelector('.card-title').innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);

    const priceText = target.parentNode.querySelector('span').innerText;
    const price = parseFloat(priceText);

    total += price;
    document.getElementById("total").innerText = total.toFixed(2);
    console.log(total);
}
