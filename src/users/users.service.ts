import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model,Query } from 'mongoose';
import { User, UserDocument } from 'src/models/models.users';
import { UserDto } from 'src/dto/users.dto';
import {faker} from '@faker-js/faker';


@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private  usermodel:Model<UserDocument>) {};
    Add(body : UserDto) {
        return this.usermodel.create(body);
    }

    FindAll() {
        return this.usermodel.find().exec();
    }
    FindOne(id : string) {
        return this.usermodel.findOne({_id: id}).exec();
    }
    Update(id : string, body : UserDto) {
        return this.usermodel.findByIdAndUpdate(
            {_id: id},
            {$set: body},
            {new: true},
            
            );
    }
    Delete(id   : Query<any, UserDocument>) {
        return this.usermodel.remove({_id: id}).exec();
    }
    
    Search(key : string) {
        const keyword=key ? key : '';
        return this.usermodel.find({$or: [
            {fullname: {$regex: keyword, $options: 'i'}},
            {email: {$regex: keyword, $options: 'i'}},
           

        
        ]}).exec();
    }

    Faker() {    
        for (let i = 0; i < 30; i++) {
            const fakeUser= {
                fullname: faker.name.fullName(),
                email: faker.internet.email(),
                age : 30,
                country : faker.address.city(),

            };
            this.usermodel.create(fakeUser);
        }
        return "success";
    }
        
    
}
