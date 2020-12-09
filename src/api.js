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

//Popular, upcoming, new Games url-part

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;


export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

