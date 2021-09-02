const doSomethingAsync = ()=>{
    return new Promise((resolve,reject)=>{
        (true)
         ? setTimeout(()=>{
             resolve('do Something async')
         },3000) 
         : reject(new Error('Test error'))
    })
}

const doSomething = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    }catch{
        console.error(err);
    }

}

doSomething();