function createList(acc, countryCard) {
  return (
    acc +
    `
    <li class="list_item">
      <img class="img"
        src="${countryCard.flags.svg}"
        alt="${countryCard.name}"
        width="80"
      />
      <h2>${countryCard.name}</h2>
    </li>`
  );
}

function generateContentList(array) {
  return array.reduce(createList, '');
}

export { generateContentList };
