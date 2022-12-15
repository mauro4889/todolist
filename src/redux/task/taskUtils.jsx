export const updateTasks = (arrTasks, tasks) =>{

    const exists = arrTasks.forEach((a)=>{
        tasks.forEach((b)=>{
            if( a == b){
                return true
            }
        })
    })

    if (exists){
        return arrTasks
    }
    
    tasks.forEach((value)=>{
        arrTasks.push(value)
    })
    return arrTasks
}