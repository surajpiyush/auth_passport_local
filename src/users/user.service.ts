import { Injectable } from "@nestjs/common/decorators";
import { User } from "./user.entity";

@Injectable()
export class UserService {
   public users:User[]=[{
    username:'user1',
    password:'user9648',
    email:'user1@gmail.com'
   },
{
    username:'user2',
    password:'user9648',
    email:'user2@gmail.com'
},
{
    username:'user3',
    password:'user9648@',
    email:'user3@gmail.com'
}
]

getUserByName(userName:string):User{
   let myuser= this.users.find((user)=>{ return user.username===userName})
   console.log(myuser);
   return myuser;
}


}