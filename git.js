
//! git / github
//? version - snapshot of changes 

//* github , gitlab, bitbucket
//  web based service provider


//* git - everyday changes 
//does in local
//? distributed vcs.
// every changes for git is version
//? version control
//? team collaboration

//distributed ver control- sabaiko system is a server for git
// database local device mai hunxa

// branching

//! git commands
//? config

//* git config --global --list
//* git config --global user.name "<user_name>"
//* git config --global user.email "<user_email>"
//* git config --global init.defaultbranch "main"

//! repository / repo
//? local repo
// local folder where git is initialized
//? remote repo 
// as a backup
// github / git

//! workflow of git

//? working directory       -> staging area     ->local repo
//?     changes                 ready state         new version / commit

//! initialize empty local repo
//* git init
// jun folder ma xa teslai as a local repo initialize garxa
// ls -a (. ->hidden folder)
// initialize vayesi .git create hunxa if we dlt it it will delete all the history so to prevent it 
// github is used

//* git status
//* git add <file_path>
//* git add .
// . - current folder
// .. - parent/ root

//* git commit -m "<commit_message>" - for single

//* git push origin <branch_name>

//? remote repo
//* git remote -v ->list remote repo
//* git remote add origin <remote_repo_url>
//* git remote remove origin

// push-remote ra local ko latest changes herxa not working directory or local repo
// compares and add new changes only 
//doesnt push all again and again 
// same goes for commit too

// to not track or hidden file
// .gitignore

//! branch
//* git branch
//* git branch <branch_name>
//* git branch <branch_name>
// branch naya banuda completely work as a new no history of previous is recorded
//* git switch <branch_name>
//* git merge <branch_name>

//merge conflict : same file same line changes by different people or by own
// same branch ma vako change - base or current change
// incoming change - jun brnch bata ako
// conflict resolve garesi commit garnu parxa but no need to add

//* git stash