const http = require("http");
const app = require("./App");
const port = 7700;//local
const server = http.createServer(app);
module.exports = server;
app.listen(port);
module.exports = server;



// export const productData = [
//     {
//         id:"1",
//         name: 'Nike Impact 4',
//         price: '₪379.90',
//         img: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/36d173ac-71b7-4bda-8c43-b59638438051/impact-4-basketball-shoes-5gf3h2.png",

//     },

//     {
//         id:"2",
//         name: 'Nike Blazer Mid 77',
//         price: '₪399.90',
//         img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7dcc6fd4-b41c-493e-85bd-58b8944b6b1d/blazer-mid-77-shoes-GpF2lM.png',


//     },

//     {
//         id:"3",
//         name: 'Nike Downshifter 12',
//         price: '₪189.90',
//         img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5d0c042b-31e8-4528-8893-00e8c1928214/downshifter-12-older-road-running-shoes-wKPwbW.png',

//     },

//     {
//         id:"4",
//         name: 'LeBron 20',
//         price: '₪799.90',
//         img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d62406e8-c459-4d3e-99bb-554c4e99f81e/lebron-20-basketball-shoes-756ZMJ.png',


//     },

//     {
//         id:"5",
//         name: 'Nike Air Max 270',
//         price: '₪599.90',
//         img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/gorfwjchoasrrzr1fggt/air-max-270-shoes-nnTrqDGR.png',

//     },

//     {
//         id:"6",
//         name: 'Nike Revolution 6',
//         price: '₪259.90',
//         img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e8382ed-f42c-4ea8-87f8-8d37fd609315/revolution-6-road-running-shoes-sP4fgd.png',

//     },

//     {
//         id:"7",
//         name: 'Air Jordan 11 CMFT Low',
//         price: '₪349.90',
//         img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/90c50a9e-4d4a-4b56-9e64-59d25cfdde2b/air-jordan-11-cmft-low-shoes-BQn4zL.png',

//     },

//     {
//         id:"8",
//         name: 'Nike SuperRep Go 3 Flyknit Next Nature',
//         price: '₪399.90',
//         img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cba4153d-f758-47a5-810f-4bd1269121fa/superrep-go-3-flyknit-next-nature-workout-shoes-C86PWv.png',

//     },


//     {
//         id:"9",
//         name: 'Luka 2',
//         price: '₪499.90',
//         img: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7e678437-bb1a-491f-b097-1ba688b48de5/luka-2-basketball-shoes-W1GZ1g.png',

//     },
// ]

