
import type contentFomat from '../dataFormat/contentFomat'


export const profiling : contentFomat[] = [
    {
        title : "Profile",
        subtitle: "what is profiling?",
        description : "when we want to deploy our pohect in defferent system, then some of the configurations in properties file will be sepicific to the system. Lets take an example of a database, username and password of a database can be different in different envioment like dev enviorment, production envioronment etc.. Every time when we want to deploy our application we have to change these configuamation manually. The handling of this all things is handled under profile.",
        formattedDescription:"There are many other configuration, which are different in different enviornment like url, port, connection timeout, retry count etc..."
    }

]