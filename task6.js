function findVowels(str) {
    let c = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < 5; i++) {
        if (str.includes(vowels[i]))
            c++;
    }
    return c
}

console.log(findVowels('hello'));
console.log(findVowels('why'));
console.log(findVowels('aeiou'));