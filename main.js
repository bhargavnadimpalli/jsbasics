const age = 23;

const eligible = age < 30 && age > 18 ? 'eligible' : 'not eligible';

switch(eligible){
    case 'eligible':
        console.log('you are eligible');
        break;

    case 'not eligible':
        console.log('you are not eligible');
        break;

}