Dasis = require("./siswaModel");

exports.index = function (req, res) {
  Dasis.get(function (err, dasis) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }

    res.json({
      status: "success",
      message: "Siswa Berhasil Di Tambahkan",
      data: dasis,
    });
  });
};

exports.new = function (req, res) {
  let dasis = new Dasis();
  dasis.nama = req.body.nama ? req.body.nama : dasis.nama;
  dasis.tanggallahir = req.body.tanggallahir;
  dasis.jeniskelamin = req.body.jeniskelamin;
  dasis.hobi = req.body.hobi;
  dasis
    .save()
    .then((data) => {
      res.json({
        Status: "Success",
        message: "Data Baru Siswa Telah Di Buat",
        Dasis: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Server Error",
      });
    });
};

exports.view = function (req, res) {
  Dasis.findById(req.params.dasis_id, function (err, dasis) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      message: "data loading..",
      message: dasis,
    });
  });
};

exports.update = function (req, res) {
  Dasis.findById(req.params.dasis_id, function (err, dasis) {
    if (err) {
      res.json({
        status: "error",
        message: "Error Slurr !",
      });
    }
    dasis.nama = req.body.nama;
    dasis.tanggallahir = req.body.tanggallahir;
    dasis.jeniskelamin = req.body.jeniskelamin;
    dasis.hobi = req.body.hobi;
    dasis
      .save()
      .then((data) => {
        res.json({
          Status: "Success",
          message: "siswa Berhasil Terupdate",
          Dasis: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Server Error",
        });
      });
  });
};

exports.delete = function (req, res) {
  Dasis.remove(
    {
      _id: req.params.dasis_id,
    },
    function (err, dasis) {
      if (err) res.send(err);

      res.json({
        status: "Success",
        message: "Berhasil menghapus..",
      });
    }
  );
};
