import axios from 'axios';


const api = process.env.REACT_APP_API_URL

async function getMeetings(user) {

    user.getIdToken(false)
        .then((token) => {
            console.log(token)
            let config = {
                headers: {

                    token: token

                }
            }

            axios.get(api+"/sessions/", config).then(res => {
                console.log(res)
            })
    })


}

export default getMeetings