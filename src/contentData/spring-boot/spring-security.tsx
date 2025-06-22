export const springsecurity = [

    {
        "title":"Filters",
        "description":"This is a part of a servlet api"
    },

    {
        "title":"Filter Chain",
        "description":"This is set of filters which is executed sequentially"
    },
    {
        "title":"Implement Custom Filter",
        "code":"public class CustomFilter implement Filter{\n  @Override\n  public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse ,  .....){\n    HttpServletRequest httpServletRequest = (HttpServletRequest) sertletRequest;\n    System.out.println(\"Request Url : \" + httpServletRequest.getRequestUi() );\n    filterChain.doFilter()\n  }\n}"
    },



]
