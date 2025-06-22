// import { BsEmojiAngry } from "react-icons/bs";




export const about_spring = [
    {
        "title": "What is spring ?",
        "description": "spring is a dependncy injection framework which make our application loosely coupled. When we create object using new keyword it make or application tightly coupled.It Provides Inversion of control with the help of which we can do dependency injection(Dependency injection is a design pattern)"
    },
    {
        "title": "Inversion of control",
        "description": "The control of creation of object is taken out of from the hands of developer and given to spring, spring can dynamically create object during the run time."
    },
    {
        "title": "Bean",
        "description": "It is a java object, Which is used to tell spring that to create and manage the life-cycle of the object",
        "code":"<beans>\n\t<bean class='complete package info with class name' name = 'name of the bean'>\n\t\t<property name = 'name of the field in class'>\n\t\t\t<value>123</value>\n\t\t</property>\n\t\t<property name = 'name of the field 2 in class'>\n\t\t\t<value>abcd</value>\n\t\t</property>\n\t</bean>\n</beans>"
    },
    {
        "title": "How to create bean using annotations?",
        "description": "1.@component annotation on a class<br>2.@Configuration annotation on class and @Bean aanotaion in method inside that class",
        "code":'@component\npublic class Book{\n  book(){\n    System.out.println("Book Constructor"); \n  }\n}\n\n//2nd way\npublic interface PaymentMethod{\n    void prooceedPAyment(Double amount);\n}\npublic class GpayService implements PaymentMethod{\n\n	@override\n	void proceedPayment(Double amount){\n		System.out.println("payment through gpay");\n	}\n}\npublic class honepayService implements PaymentMethod{	\n	@override\n	void proceedPayment(Double amount){\n		System.out.println("payment hrough Phone pay");\n	\n}\n}\n@Configuration\npublic class PaymentConfig{\n	@Bean\n	public PaymentService gpayPaymentService)\n		return new GpayService();\n	}\n	@Bean\n	public PaymentService phonepayPaymentService(){\n		return new honepayService();\n	}\n}'
    },
    {
        "title": "How to see all the beans",
        "formatteddescription": " ->Add actuator dependency. \n -> In properties file add management.endpoints.web.exposure.include=*.\n->Then in browser hit locolhost/actuators/beans"
        
    },

]






// Spring IOC container
// -which manages beans inside spring boot application along with dependency of that bean.
// creation, injection, deletion everything is handled by spring IOC container.

// Implantation of IOC container is applicationcontext stores all beans inside it.

// How to create Bean?







// How to see all benas
// First way
// 1. Add dependency of spring-boot-starter-actuator
// 2. Add management.endpoints.web.exposure.include=* in properties file.
// 3. hit url localhost:port/actuator/bean

// second way
// main class add
// ConfigurableApplicationContext applicationContext = SpringApplication.run(className.class,args);










{/* <beans>
\n\t<bean class='complete package info with class name' name = 'name of the bean'>
\n\t\t<property name = "name of the field in class">
\n\t\t\t<value>123</value>
\n\t\t</property>
\n\t\t<property name = "name of the field 2 in class">
\n\t\t\t<value>abcd</value>
\n\t\t</property>
\n\t</bean>\n
</beans> */}