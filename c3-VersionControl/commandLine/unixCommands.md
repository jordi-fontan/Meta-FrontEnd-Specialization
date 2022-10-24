## Unix Commands

### The command line

#### Use Cases
![imagen](https://user-images.githubusercontent.com/63612112/197444886-05bdb8bc-bf76-4fa5-bc29-f6e76f72bc9a.png)

![imagen](https://user-images.githubusercontent.com/63612112/197445004-d192d1f2-127b-4382-aedf-571e5704c4fb.png)


`Very Important = ~ 	AltGr + 4 `

#### Starting Commands to code

- cd 
- touch
- mkdir
- history
- code (opens vscode)
- man
- pwd
- cp
- mv

#### Exercice
![imagen](https://user-images.githubusercontent.com/63612112/197445906-4c715151-901c-452a-9ce9-2109dfb0a76f.png)

![imagen](https://user-images.githubusercontent.com/63612112/197445812-fed42f7c-83b5-4491-b417-53385d52bcdf.png)

###Editing

To edit files in bash you have quiet a few options. The most common though is usually VI or Vim. VI stands for visual editor and it allows you to make edits and changes to a file and save them. Its very similar to what you may have used in applications like word. VIM is a better version of VI with some improvements - hense its name visual editor improved. Learning the different commands in Vim will feel a bit different coming from GUI applications but once you practice it will feel like second nature. Vim uses modes to determine the commands you can work with:

    Normal mode: Default mode

    Insert mode: Allows the contents of the files to be edited.

    Command line mode: Normal commands begin with :

### Bash commands

Bash provides a list of commands that helps you navigate through files, view contents of files and also edit features to change or update the contents of a file. Below is a list of the most common commands:

|Command | Used for | 
|---|---|
|cd |Change Directory|
|ls |List command used for showing the content of a directory.|
|rm |Remove command used for removing a file or a directory|
|mv|Used to move files or folders to another location|
|touch |Allows creating of a new empty file or to upate a timestamp on a file|
|cp| Used to make a copy of a file or foldler|
|mkdir| Make a new directory|
|pwd |Print work directory, shows the current location in the shell|
|cat |Allows reading or concatenation of a file|
|less| Displays the contents of a file one page at a time.|
|grep |Global regular expression, allows for searching contents of files or folders|


### Reading a File with less (bashrc and .profile)

- Q to exit

![imagen](https://user-images.githubusercontent.com/63612112/197472003-e87d0654-8d6c-4a8d-b409-76f320e82c09.png)

### Enviroment

![imagen](https://user-images.githubusercontent.com/63612112/197472276-0bcfd916-aa15-49be-a396-e497e582c1b8.png)

### Editing with VIM/Write and Execute scripts
 
 #### Insert Mode <i>
    - vim testshell.sh
        - #!/bin/bash
        - echo "Hello World"

        - :q!
    - chmod 755 testshell.sh
    - ./testshell.sh
    
    
    
    
