
export const dayOfWeek = (date,days) =>{
    const weekDays = ['Su','Mo','Tu','We','Th','Fr','St'];
    const day = new Date(date).getDate();
    const finalDay = new Date(date).setDate(day+days);
    return weekDays[new Date(finalDay).getDay()]

}
dayOfWeek(new Date(2021,8,9),1)