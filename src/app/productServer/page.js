async function fetchData() {
    let data = await fetch('https://dummyjson.com/products')
    data = await data.json()
    return data.products
}

export default async function productsServer() {
    const products = await fetchData()
    return (<>
        {
            products.map((item, index) => {
                return (<>
                    <div key={index}>
                        {item.title}
                    </div>
                </>)
            })
        }
    </>)
}