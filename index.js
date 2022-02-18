function superbowlWin(array){
    let resultObject = array.find(record => record.result === "W") 
        if(resultObject){
            return resultObject.year
        }
}

//console.log(record.find(superbowlWin).year);