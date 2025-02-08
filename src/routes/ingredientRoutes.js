const express = require("express");
const router = express.Router();
const ingredientController = require("../controller/IngredientController");

router.post("/", ingredientController.createIngredient); // Thêm mới
router.get("/", ingredientController.getAllIngredients); // Lấy tất cả
router.get("/:id", ingredientController.getIngredientById); // Lấy theo ID
router.put("/:id", ingredientController.updateIngredient); // Cập nhật
router.delete("/:id", ingredientController.deleteIngredient); // Xóa

module.exports = router;
