:: ��@��ʾ��echo off������ʾ����Ȼ����ʾ��echo off������
:: REM������ð��(::) ��ע��
@echo off 
title ����JSXת�� 
cls
echo.
echo �X-------------------------------------------�[ 
echo                  ����JSXת��
echo �^-------------------------------------------�a 
echo.
:: BAT����Ŀ¼
set curdir=%~dp0
cd /d %curdir%
:: BAT�ļ��ϼ�Ŀ¼
cd..
:: ���������Ϣ
echo ������Ŀ¼��%cd%\jsx\
echo �����Ŀ¼��%cd%\js\react\
echo ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
:: ��������
jsx --watch jsx/ js/react/

pause...