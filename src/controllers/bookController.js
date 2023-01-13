const Book = require('../models/book');
const Author = require('../models/author');
const Category = require('../models/category');

class bookController{
    async getAllBook(req, res){
        try{
            const books = await Book.find().populate('authors').populate('categories');
            res.status(200).json(books);
        }
        catch(err){
            res.status(500).json(err);
        }
    };

    async getABook(req, res){
        try{
            const idBook = req.params.id;
            const book = await Book.findById({_id: idBook}).populate('authors').populate('categories');
            if(book){
                res.status(200).json(book);
            }
            else{
                res.status(404).json({message: 'Book not found'});
            }
        }
        catch(err){
            res.status(500).json(err); 
        }
    }

    async addBook(req, res) {
        try{
            const newBook = req.body;
            let checkAuthor = true;
            let checkCategory = true;

            if(req.body.authors){
                const authors = await Author.find();
                checkAuthor = req.body.authors.every((authorID) => {
                    let checkAuth = false;
                   authors.forEach((author) => {
                        if(author._id == authorID) {
                            checkAuth = true;
                        }
                   }) 
                   
                   if(checkAuth){
                     return true;
                   }
                   return false;
                });
            }

            if(req.body.categories){
                const categories = await Category.find();
                checkCategory = req.body.categories.every((categoryID) => {
                    let checkCateg = false;
                    categories.forEach((category) => {
                        if(category._id == categoryID) {
                            checkCateg = true;
                        }
                   }) 
                   
                   if(checkCateg){
                     return true;
                   }
                   return false;
                });
            }

            if(!checkAuthor){
                res.status(400).json({message: 'Invalid authors'});
            }
            else if(!checkCategory){
                res.status(400).json({message: 'Invalid categories'});
            }
            else{
                Book.create(newBook)
                    .then((result) => {
                        res.status(200).json({message: "Created book success"});
                    })
            }
        }
        catch(err){
            console.log('err');
            res.status(500).json(err);
        }
    };

    async updateBook(req, res) {
        try{
            const idBook = req.params.id;
            const book = await Book.findById({_id: idBook});

            if(book){
                let checkAuthor = true;
                let checkCategory = true;
    
                if(req.body.authors){
                    const authors = await Author.find();
                    checkAuthor = req.body.authors.every((authorID) => {
                        let checkAuth = false;
                       authors.forEach((author) => {
                            if(author._id == authorID) {
                                checkAuth = true;
                            }
                       }) 
                       
                       if(checkAuth){
                         return true;
                       }
                       return false;
                    });
                }
    
                if(req.body.categories){
                    const categories = await Category.find();
                    console.log(categories)
                    checkCategory = req.body.categories.every((categoryID) => {
                        let checkCateg = false;
                        categories.forEach((category) => {
                            if(category._id == categoryID) {
                                checkCateg = true;
                            }
                       }) 
                       
                       if(checkCateg){
                         return true;
                       }
                       return false;
                    });
                }
    
    
                if(!checkAuthor){
                    res.status(400).json({message: 'Invalid authors'});
                }
                else if(!checkCategory){
                    res.status(400).json({message: 'Invalid categories'});
                }
                else{
                    await Book.updateOne({_id: idBook}, req.body);
                     res.status(200).json({message: "Updated book success"});
                }
            }
            else{
                res.status(404).json({message: 'Book not found'}); 
            }
        }
        catch(err){
            res.status(500).json(err);
        }
    }

    async deleteBook(req, res) {
        try{
            const idBook = req.params.id;
            const book = await Book.findById({_id: idBook});

            if(book){
                Book.deleteOne({_id: idBook}, (err, result) => {
                    if(err){
                        res.status(500).json(err);
                    }
                    else{
                        res.status(200).json({message: "Deleted book success"});
                    }
                });
            }
            else{
                res.status(404).json({message: 'Book not found'}); 
            }
        }
        catch(err){
            res.status(500).json(err);
        }
    }
}

module.exports = new bookController();