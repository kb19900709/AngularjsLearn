All project reference : https://github.com/shyamseshadri/angularjs-up-and-running

=============================================================================

Convert project:

Under Project Properties -> Project Facets -> Convert to faceted form... 
you can select Static Web Module and JavaScript

=============================================================================

How to run on HTTP Preview at localhost:

1. Go into your workspace directory and open the file .metadata.plugins\org.eclipse.wst.server.core\servers.xml into a text editor or using File > Open File... in Eclipse.
2. Find the <server> element for the Preview server in question and add a port attribute, e.g. port="8181".
3. Restart Eclipse to pickup the change.