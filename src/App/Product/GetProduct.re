let productArr: array(ProductTypes.product) = [|
    {
        id: 1,
        name: "product A",
        price: 100.5
    },
    {
        id: 2,
        name: "product b",
        price: 50.0
    }
|]

let getAllProduct = (): array(ProductTypes.product) => productArr