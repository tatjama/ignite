//Base url
const base_url = "https://api.rawg.io/api/";

//Getting the dates

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    console.log(month);
    if(month < 10){
        return `0${month}`
    }else{
        return month
    }
}
const getCurrentDay = () => {
    const day = new Date().getDate() + 1;
    
    if(day < 10){
        return `0${day}`
    }else{
        return day
    }
}

//Date, Year, Month, Day
const currentYear = new Date().getFullYear() ;
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
console.log(currentDate)

//Popular Games

const popular_games = `games?dates=${lastYear},${currentYear}&ordering=-rating&page_size=20`;


export const popularGamesURL = () => `${base_url}${popular_games}`;
