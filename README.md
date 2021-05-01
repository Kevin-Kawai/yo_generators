Use the sub-generator generator to create a sub-generator. Add the name to the files section under package.json

# Creating new generators set
Go to the root folder then use the `generator-generator` generator to create a new generator set then add the name of generator to the `package.json`

# Moving an existing project to a project
1. Create a Folder inside the generator set to add (if it's a javascript project like react create a folder under javascript). 
1. Create a `templates` folder with the contents of the project inside of it.
1. Copy the `index.js` of another project, it should mostly copy the contents of the templates folder however if you need more logic this is the file to edit.

# How to setup generators
After copying the repo go to the generator folder and use the command 
```
yarn link
```

You should then be able to see that generator when you use 
```
yo --generators
```