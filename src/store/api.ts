import axios from "axios"

export default {
    getEntries: () => {
        return axios({
            method: "GET",
            url: "https://run.mocky.io/v3/b3dc9e1b-165f-4648-ab73-1a75e82fd899"
        })
    }
}