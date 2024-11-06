




app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/anonymous", anonymousRouter)

const PORT = 3000;