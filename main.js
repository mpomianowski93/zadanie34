let tekst1 = 'Uwielbiam JavaScript';
let tekst2 = 'Jestem świetnym programistą';

function dlugosc(text1, text2) {
	if (text1.length > text2.length) {
		return text1;
	} else if (text1.length < text2.length) {
		return text2;
	}
}
console.log(dlugosc(tekst1, tekst2));
