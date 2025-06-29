import type contentFomat from '../dataFormat/contentFomat'


export const profiling : contentFomat[] = [
    {
        title : "Profile",
        subtitle: "what is profiling?",
        description : "when we want to deploy our application in different system, then some of the configurations in properties file will be sepicific to the system. Lets take an example of a database, username and password of a database can be different in different envioment like dev enviorment, production envioronment etc.. Every time when we want to deploy our application we have to change these configuamation manually. To handle of this all things profile is used.There are many other configuration, which are different in different enviornment like url, port, connection timeout, retry count etc..."
    },
    {
        description:"In order to maintain different configuration for different environment create a properties files for that environment. Fomat of the file name will be application-(your_environemt_name).proverties. In order to run this profile add spring.profiles.active=(your_environemt_name) in base properties file. The broblem with this is we have to change this parameter every time when we run our application in different environment. "
    },
    {
        subtitle:"How to configure profile dynamically?",
        description:"There are two ways",
        formattedDescription:"1. Application startup using command - mvn spring-boot-run -Dspring-boot.run.profiles=prod.\n2. Add profiles in postMessage.xml and run appication using  mvn spring-boot:run -Pproduction\n    <profiles>\n        <profile>\n            <id>local</id>\n            <properties>\n                <spring-boot.run.profiles>dev</spring-boot.run.profiles>\n            </properties>\n        </profile>\n        <profile>\n        <id>production</id>\n        <properties>\n           <spring-boot.run.profiles>prod</spring-boot.run.profiles>\n        </properties>\n    </profile>\n   </profiles>"
    },

    {
        title: "@Profile",
        description:"This annotations helps us to tell the spring-boot application to create bean only when particular profile is set.",
        code:"@Component //  this bean will be creted  in both environment\nclass DbConnection{\n    @Value(\"${username}\")\n    String username;\n    @Value(\"${username}\")\n    String password;\\n\n    @PostConstruct\n    public void init(){\n        System.out.println(\"DBConnection\");\n        System.out.println(\"Username : \"+ username + \" | password : \" + password);\n    }\n\n}\n\n@Component\n@Profiler(\"prod\") // this bean will be creted  when spring.profiles.active=prod\nclass MySqlConnection{\n    @Value(\"${username}\")\n    String username;\n    @Value(\"${username}\")\n    String password;\\n    \n    @PostConstruct\n    public void init(){\n        System.out.println(\"MySqlConnection\");\n        System.out.println(\"Username : \"+ username + \" | password : \" + password);\n    }\n\n}\n@Component\n@Profiler(\"dev\") //  this bean will be creted  when spring.profiles.active=dev\nclass NoSqlConnection{\n    @Value(\"${username}\")\n    String username;\n    @Value(\"${username}\")\n    String password;\\n    \n    @PostConstruct\n    public void init(){\n        System.out.println(\"NoSqlConnection\");\n        System.out.println(\"Username : \"+ username + \" | password : \" + password);\n    }\n\n}"
    }

]


