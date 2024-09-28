import {connect} from 'mongoose';
import * as Objects from './CRUD/Object_CRUD';
import * as Store from './CRUD/Store_CRUD';
// Connection
connect('mongodb://localhost:27017/ea-mongoose')
  .catch((error) => console.log(error));

// Madel and Interface
import { IUser, UserModel } from './models/User';
import { TodoModel } from './models/Todo';
import { StoreModel } from './models/Store';
import { IObject, ObjectModel } from './models/Object';

/*
// One user
const user1: IUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
    }
}

// Insert
const newUser= new UserModel(user1);
newUser.save()
    .then( user => {
        console.log('User Inserted ' + user._id + ' ' + user.id) 
    })
    .catch( error => {
        console.log('Error: Insert user1');
    });


// Find and Insert
UserModel.findOne({id: 1}).exec()
    .then( userFound => {
        console.log('User Found ' + userFound._id + ' ' + userFound.id)
        const newTodo = new TodoModel({id: 2, user: userFound._id, name: "Test"});
        newTodo.save()
          .then( todo => console.log(' Todo Inserted '  + todo._id + ' ' + todo.id) )
          .catch( error  => console.log(' Todo duplicated' ));
    })
    .catch((error) => {
		console.log('Error: Find and Insert');
    });


// Populate
TodoModel.findOne({id: 2}).exec()
    .then( todoFound => {
        console.log(' Todo without Populate ' + todoFound)
    })
    .catch((error) => {
      console.log('Error: Todo without Populate');
    });


TodoModel.findOne({id: 2}).populate('user').exec()
    .then( todoFound => {
        console.log(' Todo with Populate ' + todoFound)
    })
    .catch((error) => {
      console.log('Error: Todo with Populate');
});
*/
const Iobject1: IObject = {
  'id':1,
  'name': 'Armario',
  'price': 30,
  'description': 'Armario de kaoba doble puerta 2x6'
}

const Iobject2: IObject = {
  'id':2,
  'name': 'Sommier',
  'price': 60,
  'description': 'Sommier de kaoba 8x8'
}

const Iobject3: IObject = {
  'id':3,
  'name': 'Cama',
  'price': 100,
  'description': 'Cama de kaoba doble 4x4'
}

async function CRUDProbe() {
  const object1 = new ObjectModel(Iobject1);
  const object2 = new ObjectModel(Iobject2);

  await Objects.getEntries.create(object1).then(objectResponse=>{
    const store1 = new StoreModel({
      id:1,
      objects: objectResponse._id,
      name: 'Ikea',
      countries: 'Spain'
    })
    Store.getEntries.create(store1);
  });
  await Objects.getEntries.create(object2).then(objectResponse=>{
    const store2 = new StoreModel({
      id:2,
      objects: objectResponse._id,
      name: 'LeroyMerlin',
      countries: 'Spain'
    })
    Store.getEntries.create(store2);
  });

  await Objects.getEntries.update(2,Iobject3);
  await Objects.getEntries.create(object2);
  await console.log(await Objects.getEntries.getAll());
  await Objects.getEntries.delete(2);
  await console.log(await Store.getEntries.findObjects(2));
  await console.log(await ObjectModel.aggregate([
    {
      $match:{price:{$gt:50}}
    }
  ]));
}

CRUDProbe();
