const geoCode = (address,callback) => {
    let data;
    setTimeout(()=>{
        data = {
            address:address,
            latitude:"-118.2439",
            longitude: "34.0544"
        } 
        callback(data);
    },0)
}

geoCode("sri lanka", (data) =>{
    console.log(data);
});


const sum = (num1,num2,callback) => {
    setTimeout(()=>{
        let result = num1 + num2;
        callback(result);
    },0);
}

sum(1,2,(result)=>{
    console.log(result);
})
