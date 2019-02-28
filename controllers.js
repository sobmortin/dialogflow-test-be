exports.getLocation = (req, res, next) => {
  console.log("we got a request");
  res.send({ msg: "England" });
};
