@echo off
cd /d "%~dp0"
node --experimental-sqlite src\server.js
if errorlevel 1 pause
