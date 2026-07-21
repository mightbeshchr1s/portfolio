@echo off
cd /d "D:\Projects\VSCPROJ\portfolio"
echo Starting portfolio dev server at http://localhost:3000/portfolio
start http://localhost:3000/portfolio
call npx next dev -p 3000
pause
