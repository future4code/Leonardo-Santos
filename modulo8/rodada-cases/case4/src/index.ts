import { app } from "./controller/app"
import { productRouter } from "./controller/router/productRouter"

app.use("/amaroteam/product", productRouter)