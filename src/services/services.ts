import httpClient from '../services/httpClient'


const getAccessToken = async (token: string) =>{
    return await httpClient.get(`/amo/oauth/token`, {
        headers: {
            'X-Client-Id': token,
            },
    })
}

const createEntity = async (type: string, accessToken: string, baseUrl: string ) => {
    return await httpClient.post('/amo/create-entity/', {}, {
        params: {
            baseUrl: baseUrl,
            type: type
        },
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    });
};


// const getAmoDeals = async (accessToken: string) => {
//     return await httpClient.get(`/leads`, {
//         headers: {
//             'Authorization': `Bearer ${accessToken}`,
//         },
//     })
// }

// const getAmoContacts = async (accessToken: string) => {
//     return await httpClient.get(`/contacts`, {
//         headers: {
//             'Authorization': `Bearer ${accessToken}`,
//         },
//     })
// }

// const getAmoCompanies = async (accessToken: string) => {
//     return await httpClient.get(`/companies`, {
//         headers: {
//             'Authorization': `Bearer ${accessToken}`,
//         },
//     })
// }


export {
    getAccessToken,
    createEntity
    // getAmoDeals,
    // getAmoContacts,
    // getAmoCompanies
}