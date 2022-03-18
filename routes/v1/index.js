const express = require("express");
const router = express.Router();
const employeesRoutes = require('./employees')

//routes
router.use("/employees", employeesRoutes);


//apis
router.get("/", async (req, res) => {
    try {
        res
            .status(200)
            .send(
                `api version V1 is active.`
            );
    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
});

module.exports = router;
