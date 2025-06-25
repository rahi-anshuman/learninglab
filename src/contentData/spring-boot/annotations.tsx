import type contentFomat  from '../dataFormat/contentFomat'

export const annotationData : contentFomat[] = [
    {
        title:"@Controller",
        description : "Here we write out actual API. API request coming from outside your application will land in this class"
    },
    {
        title:"@RestController",
        description: "If API is not returning any view then instead of controller we can use Restcontroller. It removes the overhead of add @ResponseBody to every controller function. @RestController = @controller + @ResponseBody"
    },
    {
        title:"@ResponseBody",
        description: "This annotation is applied to a method which ensures that response of the API is not a view."

    },
    {
        title:"@RequestParam",
        description: "This is added to function parameter which is used to fetch query parameter from url",
        syntax:"// url = (localhost:8080/getbookbyId?book_id = 1)\n@GetMapping(path = '/getbookbyId')\npublic String getBookById(@RequestParam(name='book_id') Integer bookId)"
    },
    {
        title:"@PathVariable",
        description: "This is added to function parameter which is used to fetch path variable from url",
        syntax:"// url = (localhost:8080/getbookbyId/12)\n@GetMapping('/getbookbyId/{book_id}')\npublic String getBookById(@PathVariable(name='book_id') Integer bookId)"
    },
    {
        title:"@RequestBody",
        description: "This is added to function parameter which is used to fetch the body/data",
        syntax:"// url = (localhost:8080/getbookbyId/12)\n@PostMapping('/addbook')\npublic String getBookById(@PathVariable(name='book_id') Integer bookId)"
    },
    {
        title:"@RequestMapping",
        description: "This is added to function parameter which ",
        syntax:"// url = (localhost:8080/getbookbyId/12)\n@PostMapping('/addbook')\npublic String getBookById(@PathVariable(name='book_id') Integer bookId)"
    },
    {
        title:"@Component",
        description: "This is used to inform spring framework to manage class life-cycle. when we run or application, it will do class path scanning for all the class created in the project and will check which class has annotation <b>component<b> it will load it into the memory. ",
    },
    {
        title:"@Service",
        description: "This is for specialization of componet which means some business logic exists in this class",
       
    },
    {
        title:"@Repository",
        description: "This means the the class is going to do database intraction",
       
    },
    {
        title:"@Autowired",
        description: "This is used to inject object automatically, which help to make application loosely coupled",

    },
    {
            title:"@Configuration",
            description: "When inside a class we want to create a custom bean we have to annotate class with configuration.It is different from @component It has proxyBean method which is by default true which means cgli proxy or code generation library proxy which will make sure that bean created will be singleton by default which will not happen in @component.Secondly it has enforceUniqueMehod which will make sure that you dont have any conflicting bean inside class.",
           
    },
    {
        title: "@ComponentScan",
        description:"How exactly your application is looking for a bean inside your application.How application will find all the class which package to use to sacan it and crate a bean, this is done using @componentScan",
        formattedDescription:"com.primaarypackage\n    |\n    |\n    |_________ main package\n    |               |\n    |               |\n    |               |_________ Main class for appication\n    |               |\n    |               |_________ SubPackage(e.g ontroller, service , repository etc...)\n    |\n    |___________ Main package 2\n "

    },
    {
        "description":"By default spring scans the package in which main class is there , it will scan all the package at this level and create a bean.In order to change this package to scan or if we want to add other package also to scan for bean  we can use @ComponentScan.",
        "code":"1. using basePacakage as a parameter in main class \n@SpringAnnotation \n@ComponentScan(basePackage = {\"com.primaarypackage.main_package\",\"com.primaarypackage.main_package2\"})\n  public class SpringSecurityDbApplication {\n    public void run(String... rgs) throws Exception {\n		// TODO Auto-generated method stub\n}\n}\n2. using seperate class other than main class\nNote: ComponentScan should be used along with @Configuration\n\n@Configuration\n@ComponentScan(basePackage = {\"com.primaarypackage.main_package\",\"com.primaarypackage.main_package2\"})\npublic class controllerCLass {\n    \n}"
    },
    {
        "description":"If you want to remove some of class from spring bean creation use the below excludeFilter in @ComponentScan below is the sample annotation.",
        "syntax":"@ComponentScan(\n    basePackage ={\"com.primaarypackage.main_package\"}, \n        excludeFilter = @ComponentSacn.Filter(\n            type = FilterType.Assignaable_type, class = {classname.class})\n)"
    }

]

export const aop =[
    

   
    
        
        
    ]






 