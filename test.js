const passport = require('./src/config/config.passport');
const { User } = require('./src/models/user.model');
const { Recovery } = require('./src/models/recover.model');
const sendMail = require('./src/utils/sendMail');

require('./src/dbs/init.mongoose')

// const info = {
//     name: 'admin-1',
//     email: 'vinhkhangquach2002@gmail.com',
//     gender: 'Male',
//     role: 'Admin',
//     phone: '0123456789',
//     address: 'Ho Chi Minh',
//     identity: '123456789'
// }

// User.register(info, '123456', (err, user) => {
//    if (err) {
//        return console.err(err);
//    }

//     console.log(user);
// });

const test = async () => {
    const recover = await Recovery.findOne({email: 'vinhkhangquach@gmail.com'});

    console.log(recover);
}

test();

    