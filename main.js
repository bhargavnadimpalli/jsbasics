const age = 31;

const eligible = 'not selected';

switch(eligible){
    case 'eligible':
        console.log('you are eligible');
        break;

    case 'not eligible':
        console.log('you are not eligible');
        break;

    default:
        console.log('please select the age');
        break;

}