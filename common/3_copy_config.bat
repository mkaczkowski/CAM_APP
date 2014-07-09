cd /d %~dp0
xcopy /y stuff\config.xml android
xcopy /y stuff\config.xml ..\camera-app\dist
xcopy /y stuff\config.js ..\camera-app\config\
pause
 