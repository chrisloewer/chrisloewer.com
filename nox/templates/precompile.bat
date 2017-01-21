@echo off
setlocal EnableDelayedExpansion
cls
rem echo -------------------------------
rem set file=""
for /r %%f in (*.handlebars) do (

		rem echo oldFile should be = !file!
  	    set "oldFile=!file!"
  		rem echo oldFile = !oldFile!

		rem echo current file should be = %%~nxf
		set curFile=%%~nxf
		rem echo current file = !curFile!


    	set temp=%%~nxf
  		set "file=!oldFile! !temp!"
        rem echo temp = !temp!
        rem echo file = !file!
        rem echo ---------
)

echo ----------------
echo %file%

handlebars %file% -f templates.js

exit