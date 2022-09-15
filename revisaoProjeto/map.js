
console.clear();

const veículos =[
    {
        marca: "Fiat",
        motor: "1,0",
        modelo: "Palio",
        ano: '1997',
    },
    {
        marca: "Renaut",
        motor: "2,0",
        modelo: "Duster",
        ano: '2015',
    },
    {
        marca: "Fiat",
        motor: "2,0",
        modelo: "Toro",
        ano: '2021',
    }
]
veículos.map((value,index)=>{console.log(value,index)})
return {...value, anoFabrica : value.ano + 33}


console.table(veículos);
