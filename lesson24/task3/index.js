
export const getDiff =(startDate,endDate)=>{
    const datesArr = [startDate.getTime(),endDate.getTime()].sort((a,b)=>b-a);
    const timeDiff =datesArr[0]-datesArr[1] ;// in millisecondes

    const daysTime = timeDiff / (1000 * 3600 * 24);
    const days = Math.floor(daysTime); // days;

    const hoursTime = (daysTime - days)*24;
    const hours = Math.floor(hoursTime);

    const minTime = (hoursTime - hours)*60;
    const min = Math.floor(minTime);

    const secTime = (minTime - min)*60;
    const sec = Math.floor(secTime);
    console.log(`${days}d ${hours}h ${min}m ${sec}s`)
    return `${days}d ${hours}h ${min}m ${sec}s`
}

