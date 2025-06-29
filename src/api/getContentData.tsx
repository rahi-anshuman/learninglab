// import { springboot } from "../contentData/spring-boot/springboot-topics"
import { annotationData } from "../contentData/spring-boot/annotations";
import { springsecurity } from "../contentData/spring-boot/spring-security";
import { cache } from "../contentData/spring-boot/cache";
import { primary_qualifier } from "../contentData/spring-boot/primary-qualifier";
import { aop } from "../contentData/spring-boot/aop"
import { beans } from "../contentData/spring-boot/beans";
import { profiling } from "../contentData/spring-boot/profiling";
import type contentFomat from '../contentData/dataFormat/contentFomat'


// // const data:string[] = ["spring_boot_annotations", "spring_boot_spring_security", "spring_boot_cache" ]

// export default async   function getContentData(pathname:string){
//       return await import (`../contentData/spring-boot/${pathname}`)
// }


export default function getContentData(pathname: string) {
        const contentTopic: string[] = pathname.split("/")
        const pathtopic = contentTopic[contentTopic.length - 1];
        if (pathname.includes('spring-boot')) {
                switch (pathtopic) {
                        case "basics":
                                return [{ title: "this is under development phase" }] as contentFomat[];
                        case "beans":
                                return beans as contentFomat[];
                        case "annotation":
                                return annotationData as contentFomat[];
                        case "spring-security":
                                return springsecurity as contentFomat[];
                        case "aop":
                                return aop as contentFomat[];
                        case "cache":
                                return cache as contentFomat[];
                        case "primary-qualifier":
                                return primary_qualifier as contentFomat[];
                        case "profiling":
                                return profiling as contentFomat[];
                        default:
                                return [{ title: "page not found" }] as contentFomat[];

                }
        }
        else {
                return annotationData
        }
}

