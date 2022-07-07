// Como podemos rodar isso em um arquivo .ts sem causar erros? 

interface employeeData {
    code: number,
    name: string
}

let employee: employeeData = {
    code: 10,
    name: "John",

};

console.log(employee);