import fetch from "node-fetch"
import axios from "axios";

async function getData(user_id) {
    const users = await (
        (await fetch('https://jsonplaceholder.typicode.com/users/' + user_id)).json()
    )

    const posts = await (
        (await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user_id)).json()
    )

    console.log(users, posts)
}

export default getData