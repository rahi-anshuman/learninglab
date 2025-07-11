

export const beans = [
    {
        "title":"Customizing nature of Bean in lifecycle",
        "description":"These are performing some work just after creation of bean or just after deletion of beans.",
        "formattedDescription":"There are 2 ways of do it\n 1. By implementing interface\n    i. InitializingBean\n    ii. DisposeableBean\n2. using annotation over a method in a Bean. This is the recommended way.\n    i. @PostConstruct\n    ii. @PreDestroy",
        "image":"../static/img/customizing_bean_nature.png"
    },
    {
        "title": "scope of the bean",
        "description":"Whenever bean is created there is two type of initialization",
        "formattedDescription":"1. Eager Initializtion \n2. Lazy Initialization \n"
    },
    {
        "title": "\n",
        "description":"\n There are 4 types of scope for a java bean",
        "formattedDescription":"1. Singleton \n2. Prototype\n3. Request\n4. Session"
    },
    {
        "title":"\n",
        "description":"Singleton",
        "formattedDescription":"If scope is not defined by default spring take it as Singleton. This means that the bean is created only once and it will share same object/bean accross the application. It follows eager initialization",
        "syntax":"@Scope(Type = \"Singleton\")"
    },
    {
        "title":"\n",
        "description":"Prototype",
        "formattedDescription":"New object/bean is created every time whenever it is required. It follows lazy initialization",
        "syntax":"@Scope(Type = \"Prototype\")"
    },
    {
        "title":"\n",
        "description":"Request",
        "formattedDescription":"Same object/bean is used per HTTP Request. It follows lazy initialization. There is one issue with Request scope that it cannot be inserted in singleton bean as request is not active in current thread. In simple terms You're trying to access something that only exists during an HTTP request.But the singleton bean is being initialized outside any request (e.g., during app startup), so there's no active HTTP request.In order to resolve this issue we need ProxyMode.",
        "syntax":"@Scope(type = \"Request\", ProxyMode = ScopedProxy_Mode.Target_Class)"

    },
    {
            description : "This way, Spring injects a proxy that fetches the real bean only when needed, and only during a valid request."
    },
    {
        "title":"\n",
        "description":"Session",
        "formattedDescription":"New bean/object is created for each HTTP session. It follows lazy initialization. whenever user uses api session is created. Bean remains active till the session is expired.",
        "syntax":"@Scope(Type = \"Session\")"
    },

]
