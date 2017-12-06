Part 1 - Github
1. git init
2. git add file_name.file_extension
3. git commit -m 'commit message'

1. git pull origin master
2. git reset file_name.file_extension
3. git checkout -- file_name.file_extension
4. Because it specifies to git that you are checking out a file rather than an entire branch.  
5. If you made a commit that you later regretted it would be nice to revert back to a previous commit.

1. git branch branch_name
2. git checkout branch_name
3. If you wanted to work on the repo without having to worry about messing up the master.

1. If you had a branch that you wanted to merge with the master branch you would use "git merge branch_name" while you were on the master branch.  If you were working on someone else's repo and were wanting to merge your branch with their master it would probably make more sense to do a pull request so they could review and approve the changes before merging your branch with their master branch.
2. git push    
