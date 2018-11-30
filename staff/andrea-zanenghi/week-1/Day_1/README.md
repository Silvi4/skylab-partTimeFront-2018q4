##### *2018/08/10*
# Skylab
## Day 1
### Understanding Terminal and MD


Docs: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#emphasis


Lor*en ip*sum

* item 1
   * item 2
        * item 3


# Unix Directory Commands
|Command	                |What It Does                                          |
|-------------------------------|------------------------------------------------------|
|ls	                        |Lists the names of the files in the working directory.|
|cd directoryname	        |Changes the working directory to the one you named.   |
|cd ..	                        |Brings you up one directory level.                    |
|cd	                        |Returns you to your home directory.                   |
|pwd	                        |Displays the pathname of the current directory.       |
|mkdir newdirectoryname	        |Makes a new directory.                                |
|rmdir directoryname	        |Removes (deletes) an empty directory.                 |
|mv oldname newname             |Rename                                                |

# Working with Files
|Command	                        |What It Does                                                                       |
|---------------------------------------|-----------------------------------------------------------------------------------|
|cp filename1 filename2	                |Copies a file.                                                                     |
|chmod	                                |Changes permissions for access to a file. Study the man page before using this one.|
|diff	                                |Compares two files line by line (assumes text).                                    |
|more filename	                        |Displays a text file one page at a time. Press the spacebar to see the next page; press Q to quit. The man command works through more.|
|mv filename1 filename2	                |Moves a file or changes its name.                                                  |
|rm filename	                        |Removes (deletes) a file.                                                          |

# Miscellaneous Commands
|Command	                |What It Does                                                   |
|-------------------------------|---------------------------------------------------------------|
|Control+C	                |Terminates most operations.                                    |
|date	                        |Displays the current date and time.                            |
|echo	                        |Repeats whatever appears after the command (after expansion).  |
|help	                        |Displays a partial list of bash commands.                      |
|history	                |Displays the last commands you typed. You can redo a command by typing an exclamation point (!) followed immediately (no space) by the number of that command in the history list. To repeat the last command, type !!. To repeat the last filename, type!*.|
|pico	                        |A simple UNIX text editor.                                     |
|ps	                        |Displays a list of running processes.                          |
|sudo	                        |Lets you carry out commands for which the account you are using lacks authority. You will be asked for an administrator’s password.|


Extras: https://www.hosteurope.es
Infos: https://github.com/SkylabCoders/skylab-partTimeFront-2018q4/blob/develop/README.MD
