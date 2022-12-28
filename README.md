# nsikatia-leader-back



# Architecture

```
├───database              <- Files used to build application database
├───deployment            <- Files used to deploy application 
├───dataset               <- Files used to test api application 
└───src      
│  ├───controller         <- Files used to orient request (Controller layer)
│  ├───database           <- Files used to perform connection with database 
│  ├───model              <- Files used to represent data application (Model layer) 
│  │   ├───converter      <- Files used to convert dto <-> dao 
│  │   ├───dao            <- Files used to persist data (Data Access Object) 
│  │   └───dto            <- Files used to transfer data (Data Transfer Object)
│  ├───repository         <- Files used to implement CRUD operations 
│  └───services           <- Files used to communicate with controller and repository layer 
├───database              <- Files used to build application database
├───app.js                <- Application endpoint      
├───package-lock.json     <- File used to store version dependency tree (auto-generated)
├───package.json          <- File used to specify application requirements
├───README.md             <- File used to gather application important information
```

