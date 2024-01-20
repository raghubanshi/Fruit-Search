const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	// TODO
	fruit.filter((val) => {
		if (val.toLowerCase().indexOf(str.toLowerCase()) !== -1) {
			results.push(val);
		}
	});
	// Clear results if no matches found
	if (results.length === 0) {
		results = []
	}
	showSuggestions(results, str)
	return results;
}

function searchHandler(e) {
	// TODO
	search(e.target.value)
}

function highlight(dropDownItem,searchVal){
	const regEx = new RegExp(`${searchVal}`,'gi');
	const highlightedItem = dropDownItem.replace(regEx, `<strong>${searchVal}</strong>`)
	return highlightedItem;
}

function showSuggestions(results, inputVal) {
	// TODO
	// remove every li after each key up
	while(suggestions.hasChildNodes()){
		suggestions.removeChild(suggestions.firstChild)
	}
	suggestions.style.backgroundColor = 'transparent';
	if (results.length > 0) {
		for (let i = 0; i < results.length; i++) {
			let li = document.createElement('li');
			// li.innerText= results[i];
			// suggestions.append(highlight(results[i],inputVal))
			li.innerHTML = highlight(results[i],inputVal);
			suggestions.append(li);
		}
		suggestions.style.backgroundColor = '#ffffff';
	}
	if(inputVal === ''){
		while(suggestions.hasChildNodes()){
			suggestions.removeChild(suggestions.firstChild)
		}
		suggestions.style.backgroundColor = 'transparent';
	}
	console.log(results);
}

function useSuggestion(e) {
	// TODO
	let suggestionVal = e.target.innerText;
	input.value = suggestionVal;
	while(suggestions.hasChildNodes()){
		suggestions.removeChild(suggestions.firstChild)
	}
	suggestions.style.backgroundColor = 'transparent';
}

function listHover(e){
	const element = e.target;
	element.style.fontWeight = 'bold';
	element.style.fontSize = '110%';
}

function mouseOut(e){
	const element = e.target;
	element.style.fontSize = '100%';
	element.style.fontWeight = 'normal';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions.addEventListener('mouseover', listHover);
suggestions.addEventListener('mouseout',mouseOut);