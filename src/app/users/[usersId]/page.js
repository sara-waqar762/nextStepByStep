import Link from "next/link";

async function getUsers(id) {
    let fetchData = await fetch(`http://localhost:3000/user/${id}`)
    fetchData = await fetchData.json()
    return fetchData.result
}
export default async function page({ params }) {

    let data = await getUsers(params.usersId)
    let [arr] = data
    const { id, name, age, email } = arr;
    console.log(data);
    return (
        <>
            <h1>user single data</h1>
            <h2>Id: {id}</h2>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <h2>Email: {email}</h2>

        </>
    )
}



