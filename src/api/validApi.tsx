
const validApi = [
    "/",
    "/courses",
    "/spring-boot/content",
    "/spring-boot/content/basics",
    "/spring-boot/content/annotation",
    "/spring-boot/content/cache",

]

export function isValidPath( pathname : string){
    if(validApi.find(eachpathname=> eachpathname === pathname ) !== null){
        return true;
    }
    else {
        return false;
    }
   

}