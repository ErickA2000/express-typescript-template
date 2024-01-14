import { CorsOptions } from "cors";

export const server = {
    port: process.env.PORT || 3000
}

export const corsOptions: CorsOptions = {
    origin: getOrigins()
}

function getOrigins(): string[]{
        
    const origins = process.env.ORIGINS;

    if( origins != undefined ){
        let arrayOrigins = origins.split(',');
        return arrayOrigins;

    }else{
        return ['*']
    }
}