const Item = require("../models/Item");

const test = (req, res) => {
  res.send("item auth testing route");
};

const createItem = async (req, res) => {
  try {

    const {name, brand, description, quantity} = req.body

    const newPost = await Item.create({
      name: name,
      brand: brand,
      description: description,
      quantity: quantity,
    });

    res.status(200).json({
      status: "success",
      data: {
        newPost,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

const deleteItem = async (req, res) => {
  try {
    const ifExist = await Item.findById(req.params.id);

    console.log(ifExist);

    if (!ifExist) {
      res.status(501).json({
        status: "fail",
        message: "Post not exist",
      });
    }

    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: "success",
      message: `Successfully deleted`,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

const updateItem = async (req, res) => {
  try {
    const {name, brand, description, quantity} = req.body

    const item = await Item.findByIdAndUpdate(
      req.params.id,
      {
        name:  name,
        brand: brand,
        description: description,
        quantity: quantity
      },
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json({
      status: "success",
      data: {
        item,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};


const getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        item,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

const getAllItem = async (req, res) => {
  try {
    const item = await Item.find({ userPosted: req.params.id })

    res.status(200).json({
      status: "success",
      length: item.length,
      data: {
        item,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "fail",
      message: err,
    });
  }
};

module.exports = {
  createItem,
  deleteItem,
  updateItem,
  getAllItem,
  getItem,
  test,
};

