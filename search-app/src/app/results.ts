export class Results{

    status : string;

    city : string;
    state: string;
    country : string;
    
    location : any;
    type : string;
    coordinates : any;
    
    current : any;
    
    weather : any;
    ts: string;     //timestamp
    hu : number;    //humidity %
    ic : string;    //weather icon code, see below for icon index
    pr : number;    //atmospheric pressure in hPa
    tp : number;    //temperature in Celsius
    wd : number;    //wind direction, as an angle of 360° (N=0, E=90, S=180, W=270)
    ws : number;    //wind speed (m/s)

    pollution : any;
    aquis : number;     //AQI value based on US EPA standard
    mainus : string;    //main pollutant for US AQI
    aqicn : number;     //AQI value based on China MEP standard
    maincn : string;    //main pollutant for Chinese AQI

    
}