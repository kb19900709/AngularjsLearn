Use browser : Google Chrome
All project reference : https://github.com/shyamseshadri/angularjs-up-and-running

=============================================================================
angularjs

1.	two way data binding 特性，省去很多樣板式代碼。 如擷取表單最新值
2.	宣告式語法，讓開發人員更迅速的了解 html 的狀態與動作
3.	關注點分離結構(MVC or MVVM)，更迅速的針對某個節點開發與維護
4.	注入式的語法，讓寫過的服務與商業邏輯(service)可重用
5.	豐富的預設指令集(directives)，以及可自訂的指令。增加 DOM 的狀態與動作
6.	易於測試

=============================================================================

Convert project:

Under Project Properties -> Project Facets -> Convert to faceted form... 
you can select Static Web Module and JavaScript

=============================================================================

How to run on HTTP Preview at localhost:

1. Go into your workspace directory and open the file .metadata.plugins\org.eclipse.wst.server.core\servers.xml into a text editor or using File > Open File... in Eclipse.
2. Find the <server> element for the Preview server in question and add a port attribute, e.g. port="8181".
3. Restart Eclipse to pickup the change.