import * as Boom from 'boom';

import * as TestRepo from '../repositories/test';

export const testApi = async () => {
    const testResponse = await TestRepo.testApi();
    if(!testResponse) {
        throw Boom.notFound('Api not working');
    }
    return testResponse;
}

// export const addUser = async (payload: any) => {
//     console.log(payload);
    
//     const testResponse = await TestRepo.addUser(payload);
//     if(!testResponse) {
//         throw Boom.notFound('Api not working');
//     }
//     return testResponse;
// }