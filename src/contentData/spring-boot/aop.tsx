import type contentFomat from '../dataFormat/contentFomat'

export const aop : contentFomat[] = [
    {
        title :"Aspect of Programming (AOP)",
        description : "It handeles the cross cutting concerns ( things which we do apart from business logic i.e logging, transaction(ACID) ). suppose class A is calling class B method which bussiness logic and logger. This looger is called cross cutting concerns"
    },
    {
        title:"Terminologies of AOP",
    },
    {
        subtitle :"Aspect",
        description : "It is a simple class with @Aspect annotation. AOP is implemented using regular class (schema based approach) or regular class with @Aspect annotation."
    },
    {
        subtitle:"join point",
        description:"It is a method execution. In simple terms suppose we want to have logger which is to be run before our business logic. So logic to run the logger will be kept in Aspect class and this aspect class will be ruuned before aur business logic. Our business logic method is refered as join point. "
    },
    {
        subtitle:"Advice",
        description:"Action taken by an aspect at a particular join point. Different types of advice includes around, before, after."
    },
    {
        subtitle:"Point cut",
        description:"This defines which particulr method this aspect should be applied on."
    },
    {
        title:"AOP Proxy",
        description:"Spring AOP is a proxy based. Suppose a class A calls a mehod of class B invocation of method will be simple, It will simple call the method of class B. In Case of implementation of Proxy, A proxy will be creted for class B, calls from class A will first go to Proxy of class B, this proxy will check if we have any aspect(AOP) for class B by using point cut expression if any proxy is there than it will call that aspect method after execution of aspect method it will call method of class B. What is the use of Proxy? Proxy can delegate all the interceptors (advice) that are relevent to the particular method. There are two types of AOP proxy Jdk dynamic proxy or AOP proxies and CGLIB proxy (It is used in Busssiness Logic does not implement an interface)."
    },
    {
        code:"@Component\n@Aspect\npublic class SimpleLoggerAspect{\n    //excution represents designators * represents return ype of a function .. represents any parameter of method\n    @Before(\"execution(* SimpleBusissLogic.businessLogic(..))\")\n    public void log(){\n        System.out.println(\"Simpe Logger Aspect\");\n    }}\n\npublic class SimpleBusissLogic{\n      public void businessLogic(){\n        System.out.println(\"SimpleBusissLogic.usinessLogic\")\n      }\n\n}\n\n "
    },
    {
        code:"// Example for After advice\n@Component\n@Aspect\npublic class SimpleLoggerAspect{\n    //excution represents designators * represents return ype of a function .. represents any parameter of method\n    @After(\"execution(* SimpleBusissLogic.businessLogic(..))\")\n    public void log(){\n        System.out.println(\"Simple Logger Aspect\");\n    }\n}\n\npublic class SimpleBusissLogic{\n      public void businessLogic(){\n        System.out.println(\"SimpleBusissLogic.usinessLogic\")\n      }\n\n}"
    },
    {
        code:"// Example for Around advice\n@Component\n@Aspect\npublic class SimpleLoggerAspect{\n\n    @Around(\"execution(* SimpleBusissLogic.businessLogic(..))\")\n    public void log(ProceedingJoinPoints joinpoints){\n        System.out.rintln(\"Simple Logger Aspect bfore calling join point i.e bussiness logic method\");\n        Object result = joinpoints.proceed();\n        System.out.println(\"Simple Logger Aspect after calling join point i.e bussiness logic method\");\n    }\n\n}\n\npublic class SimpleBusissLogic{\n      public void businessLogic(){\n        System.out.println(\"SimpleBusissLogic.businessLogic\")\n      }\n\n}"
    },
    {
        subtitle: "After Returning Advice",
        description :"This advice runs when a matched method execution runs normally",
        syntax:"\n@Aspect\npublic class AfterReturningAdvice{\n     @AfterReturning(\"execution(* com.xyz.dao.*.*(..))\")\n    public void doAccessCheck(){\n\n    }\n}"
    },
    {
        subtitle: "After Throwing Advice",
        description :"This advice runs when a matched method execution exists by throwing an exception",
        syntax:"\n@Aspect\npublic class AfterReturningAdvice{\n    @AfterThrowing(\"execution(* com.xyz.dao.*.*(..))\")\n    public void doAccessCheck(){        \n    }\n}"
    },
    {
        title:"Pointcut Examples",
        code:"@Component\n@Aspect\npublic class SimpleLoggerAspect{\n    @Pointcut(\"execution(* SimpleBusissLogic.businessLogic(..))\")\n    private void pointcutMethod(){}\n    @Around(\"pointcutMethod()\")\n    public void log(ProceedingJoinPoints joinpoints){\n        System.out.println(\"Simple Logger Aspect bfore calling join point i.e bussiness logic method\");\n        Object result = joinpoints.proceed();\n        System.out.println(\"Simple Logger Aspect after calling join point i.e bussiness logic method\");\n    }\n}\n\npublic class SimpleBusissLogic{\n      public void businessLogic(){\n        System.out.println(\"SimpleBusissLogic.businessLogic\")\n      }\n}"
    },
    {
        title:"Designator",
        subtitle:"execution",
        description: "For matching method execution join points. This is the primary pointcut designator to use when working with Spring AOP."
        },
        {
        subtitle:"within",
        description : "Limits matching to join points within certain types (the execution of a method declared within a matching type when using Spring AOP)."
        },
        {
        subtitle:"this",
        description : "Limits matching to join points (the execution of methods when using Spring AOP) where the bean reference (Spring AOP proxy) is an instance of the given type."
        },
        {
        subtitle:"target",
        description: "Limits matching to join points (the execution of methods when using Spring AOP) where the target object (application object being proxied) is an instance of the given type."
        },
        {
        subtitle:"args",
        description :"Limits matching to join points (the execution of methods when using Spring AOP) where the arguments are instances of the given types."
        },
        {
        subtitle:"@target",
        description : "Limits matching to join points (the execution of methods when using Spring AOP) where the class of the executing object has an annotation of the given type."
        },
        {
        subtitle:"@args",
        description: "Limits matching to join points (the execution of methods when using Spring AOP) where the runtime type of the actual arguments passed have annotations of the given types."
        },
        {
        subtitle:"@within",
        description: "Limits matching to join points within types that have the given annotation (the execution of methods declared in types with the given annotation when using Spring AOP)."
        },
        {
        subtitle:"@annotation",
        description: "Limits matching to join points where the subject of the join point (the method being run in Spring AOP) has the given annotation."
        }
]





