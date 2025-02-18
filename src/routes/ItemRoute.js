const router = require("express").Router();
const {
  createItem,
  getAllItem,
  deleteItem,
  updateItem,
  getItem,
} = require("../controllers/ItemController");

router.get("/items", getAllItem); // For getting all items
router.get("/items/:id", getItem); // For getting specifc item
router.post("/item", createItem); // For creating item
router.delete("/item/:id", deleteItem); // For deleting item
router.put("/item/:id", updateItem); // For updating item

module.exports = router;

