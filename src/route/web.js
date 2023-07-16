import express from 'express'

let router = express.Router();

const initWebRoute = (app) => {
    router.get("/", (req, res) => {
        res.send("Xin chào mọi người");
    })

    router.get("/about", (req, res) => {
        res.render("index.ejs");
    })

    // tham số thứ nhất là tiền tố đầu tiên trc khi đến  router của controller
    // vd: localhost:3000/ ==> trang chủ
    app.use("/", router);
    // app.use("/abc", router); vd: localhost:3000/abc/ ==> trang chủ
}

export default initWebRoute;