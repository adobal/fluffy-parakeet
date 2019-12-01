const axios = require('axios')

async function callUrl(url) {
    return await axios.get(url).then((res) => res)
}

async function main(firstUrl, secondUrl) {
    try {
        let firstResp = await callUrl(firstUrl)
        let secondResp = await callUrl(secondUrl)

        if (JSON.stringify(firstResp.data) == JSON.stringify(secondResp.data)) {
            console.log(firstUrl + " equals " + secondUrl)
        } else if (JSON.stringify(firstResp.data) != JSON.stringify(secondResp.data)) {
            console.log(firstUrl + " not equals " + secondUrl)
        }
    } catch (e) {
        console.log(e.message)
    }
}

main("https://reqres.in/api/users/3", "https://reqres.in/api/users/1")
main("https://reqres.in/api/users/2", "https://reqres.in/api/users/2")
main("https://reqres.in/api/users?page=2", "https://reqres.in/api/users?page=2")
main("https://reqres.in/api/users?page=3", "https://reqres.in/api/users?page=1")
main("https://reqres.in/api/users?page=3", "https://reqres.in/api/users?page=2")