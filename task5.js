function fizzbuzz(num) {
    if (num > 0) {
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0)
                console.log('fizzbuzz');
            else if (i % 3 === 0)
                console.log('fizz');
            else if (i % 5 === 0)
                console.log('buzz');
            else
                console.log(i);
        }
    }
    else
        console.log('Неверное значение!');
}

fizzbuzz(5);
fizzbuzz(15);
fizzbuzz(-1);