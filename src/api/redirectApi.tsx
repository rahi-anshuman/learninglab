// import { isValidPath } from "./validApi"

export default function  redirectApi(path:string ,pathname:string, title:string){


    switch (path) {
        case "/courses":
          return  import.meta.env.VITE_COURSE_CONTENT.replace(":course",title);
        
        case "/content":
         return pathname.concat(`/${title}`)
        default:
          // Code to be executed if none of the cases match

      }

}