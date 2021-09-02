
const somethingWillHappend = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('hey we can do it !');
        }else{
            reject('oppss :(((((');
        }
    });
}

somethingWillHappend()
    .then(res=>console.log(res))
    .catch(err=>console.error(err));

//segunda promesa
const somethingHappend2 = () => {
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(() => {
                resolve('wiiiii :)))');
            }
            ,2000)
        }else{
            const error = new Error('upsss ocurrio un problema');
        }

    });
}

somethingHappend2()
    .then(res=>console.log(res))
    .catch(err=>console.error(err));

Promise.all([somethingWillHappend(),somethingHappend2()])
    .then(res=> {console.log('arrays of results ' , res)})
    .catch(err=>{
        console.log(err);
    });