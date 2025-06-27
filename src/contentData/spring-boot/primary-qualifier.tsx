
import type contentFomat from '../dataFormat/contentFomat'


export const primary_qualifier : contentFomat[]=[
    {
        title:"@Primary and @Qualifier",
        subtitle:"What is the use of this annotations",
        description:"If we have more than one bean implementation of a interface, then at the time of autowiring using interface spring will get confused which bean to inject as there are more than one implementation.",
        code:"\n@Service\npublic interface BookService{\n\n    public static void getBookDetails();\n}\n\n@Service\npublic class FictionalBookService implements BookService{\n    public  Library(){\n        System.out.println(\"from FictionalBook book service\");\n\n    public static void getBookDetails(){\n        System.out.println(\"from fictional book service\");\n    }\n}\n\n@Service\npublic class PsycologicalHorrorBookService implements BookService{\n    \n    public  PsycologicalHorrorBookService(){\n        System.out.println(\"from PsycologicalHorror book ervice\");\n    }\n    public static void getBookDetails(){\n        System.out.println(\"from Psycological book Service\");\n    }\n}\npublic class Library{\n\n    //here spring will confuse which bean to inject\n    @Autowired\n    BookService bookService;\n\n    public  Library(){\n        System.out.println(\"from Library book service\");\n    }\n}"
    },
    {
        description : "we can resolve this using @Qualifier annotation or have a defualt implemetatin of interface with @Primary anotation on that class this primary will make sure if we are not passing any qualifer at the time of injection of bean that this @primary anootated bean will be injected at that point"
    },
    {
        code:
"//Qualifier field injection\npublic class Library{\n\n    @Autowired\n      @Qualifier(\"FictionalBookService\")// this will inject FictionalBookService object\n    BookService bookService;\n\n    public  Library(){\n        System.out.println(\"from Library book service\");\n    }\n}\n\n//Qualifier constructor injection\npublic class Library{        \n        \n      // this will inject FictionalBookService object    \n    private final BookService bookService;    \n    @Autowired    \n    public  Library(@Qualifier(\"FictionalBookService\") BookService bookService ){    \n        System.out.println(\"from Library book service\");    \n    }    \n}"
    },
    {
        code : "//@Primary example\n@Service\n@Primary\nPublic class DeflautComicBook implemnts BookService{\n\n    public  void getBookDetails(){\n\n    }\n}\npublic class Library{\n    //here DeflautComicBook will be injected as it is marked as primary if Qualfier is not present\n    @Autowired\n    BookService bookService;\n\n    public  Library(){\n        System.out.println(\"from Library book service\");\n    }\n}"
    },
    {
        subtitle:"Note : Qualifier has precedence over primary."
    }

]






// \n@Service
// \npublic interface BookService{
// \n
// \n    public static void getBookDetails();
// \n}\n
// \n@Service
// \npublic class FictionalBookService implements BookService{
// \n    public  Library(){
// \n        System.out.println(\"from FictionalBook book service\");
// \n
// \n    public static void getBookDetails(){
// \n        System.out.println(\"from fictional book service\");
// \n    }
// \n}\n
// \n@Service
// \npublic class PsycologicalHorrorBookService implements BookService{
// \n    
// \n    public  PsycologicalHorrorBookService(){
// \n        System.out.println(\"from PsycologicalHorror book service\");
// \n    }
// \n    public static void getBookDetails(){
// \n        System.out.println(\"from Psycological book service\");
// \n    }
// \n}
// \n
// public class Library{
// \n
// \n    @Autowired
// \n    BookService bookService;
// \n
// \n    public  Library(){
// \n        System.out.println(\"from Library book service\");
// \n    }
// \n}








