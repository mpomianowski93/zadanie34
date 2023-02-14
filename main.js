let teskt1 = 'Uwielbiam JavaScript';
let tekst2 = 'Jestem świetnym progamistą';
function dlugosc(text1, text2) {
	if (text1.length > text2.lenght) {
		return text1;
	}
	if (text1.length < text2.lenght) {
		return text2;
	}
}
console.log(dlugosc(tekst1, tekst2));
