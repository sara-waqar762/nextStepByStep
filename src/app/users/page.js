import Link from 'next/link'

async function getUsers() {
    let dataFetch = await fetch('http://localhost:3000/user')
    dataFetch = await dataFetch.json();
    return dataFetch
}

export default async function page() {
    const data = await getUsers()
    console.log(data);
    return (
        <>
            <h1>Users Data</h1>
            <ul>
                {data.map((item, index) => (<Link key={index} href={`users/${item.id}`}><li>{item.name}</li></Link>))
                }
            </ul>
        </>
    )
}
