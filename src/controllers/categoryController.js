const Category = require('../models/category.js');
const Book = require('../models/book');

class categoryController{
    async getAllCategories(req, res){
        try{
            const categories = await Category.find();
            res.status(200).json(categories);
        }
        catch(err){
            res.status(500).json(err);
        }
    };

    async getACategory(req, res){
        try{
            const idCategory = req.params.id;
            const category = await Category.findById({_id: idCategory});
            if(category){
                res.status(200).json(category);
            }
            else{
                res.status(404).json({message: 'Category not found'});
            }
        }
        catch(err){
            res.status(500).json(err); 
        }
    }

    async addCategory(req, res) {
        try{
            const newCategory = req.body;
            await Category.create(newCategory)
                .then((result) => {
                    console.log(result);
                    res.status(200).json({message: "Created category success"});
                })
        }
        catch(err){
            res.status(500).json(err);
        }
    };

    async updateCategory(req, res) {
        try{
            const idCategory = req.params.id;
            const category = await Category.findById({_id: idCategory});
            
            if(category){
                await Category.updateOne({_id: idCategory}, req.body);
                res.status(200).json({message: 'Updated category success'});   
            }
            else{
                res.status(404).json({message: 'Category not found'});
            }
        }
        catch(err){
            res.status(500).json(err);
        }
    }

    async deleteCategory(req, res) {
        try{
            const idCategory = req.params.id;
            const category = await Category.findById({_id: idCategory});

            if(category){
                await Book.updateMany({categories: idCategory}, {$pull: {categories: idCategory}});
                Category.deleteOne({_id: idCategory}, (err, result) => {
                    if(err){
                        res.status(500).json(err);
                    }
                    else{
                        res.status(200).json({message: "Deleted category success"});
                    }
                });
            }
            else{
                res.status(404).json({message: 'Category not found'});
            }
        }
        catch(err){
            res.status(500).json(err);
        }
    }
}

module.exports = new categoryController();