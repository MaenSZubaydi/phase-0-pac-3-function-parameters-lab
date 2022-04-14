function introduction(name){
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}

function introductionWithLanguageOptional(name, language= "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}


function logTwovalues(value1, value2){
    console.log(`The values are ${value1} and ${value2}`);
}

function sayHelloTo(name = "User") {
    console.log(`Hi, my name is ${name}!`);
}