

const express = require ('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({
        status : " API Working now..",
        message : "Selamat Datang di Data Siswa"
    });
});

router.post('/', (req,res) => {
    res.send("Success!")
});

// import dasis controller
const siswaController = require("./siswaController");

router.route('/siswa')
.get(siswaController.index)
.post(siswaController.new);

router.route("/siswa/:dasis_id")
.get(siswaController.view)
.patch(siswaController.update)
.put(siswaController.update)
.delete(siswaController.delete);

module.exports = router;

