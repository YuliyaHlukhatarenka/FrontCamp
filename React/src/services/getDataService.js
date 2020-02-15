// const URL =  "https://reactjs-cdp.herokuapp.com/movies";
const URL =  "https://reactjs-cdp-api.herokuapp.com/movies";
const LIMIT = 6;

class DataService {
    constructor() {
        const Instance = DataService.instance;
        if ( Instance ) return Instance;
        DataService.instance = this;
    }

    async getData( searchString = '', searchBy = 'title', sortBy = 'release_date', sortOrder = 'desc' ) {
        console.log(searchString, searchBy, sortBy, sortOrder)
        let response = await fetch(URL + `?search=${searchString}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=${sortOrder}&limit=${LIMIT}`);
        let result = await response.json();
        console.log(result);
        return result;
    } 
}

let dataService = new DataService;



export default dataService;