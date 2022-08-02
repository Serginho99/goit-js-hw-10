function createList(countryCard) {
  return `
      <li class="list_item"><h2><img src="${countryCard.flags.svg}" alt="${countryCard.name}" width="100" /> ${countryCard.name}</h2></li>  
  `;
}

function generateContentList(array) {
  return array.reduce((acc, item) => {
    return acc + createList(item);
  }, '');
}

export { generateContentList };
