const Author = require('../models/author');
const Book = require('../models/book');

class authorController {
    async getAllAuthors(req, res){
        try{
            const authors = await Author.find();
            res.status(200).json(authors);
        }
        catch(err){
            res.status(500).json(err);
        }
    };

    async getAAuthor(req, res){
        try{
            const idAuthor = req.params.id;
            const author = await Author.findById({_id: idAuthor});
            if(author){
                res.status(200).json(author);
            }
            else{
                res.status(404).json({message: 'Author not found'});
            }
        }
        catch(err){
            res.status(500).json(err); 
        }
    }

    async addAuthor(req, res) {
        try{
            const newAuthor = req.body;
            console.log(req.body)
            await Author.create(newAuthor)
                .then((result) => {
                    console.log(result);
                    res.status(200).json({message: "Created author success"});
                })
        }
        catch(err){
            res.status(500).json(err);
        }
    };

    async updateAuthor(req, res) {
        try{
            const idAuthor = req.params.id;
            const author = await Author.findById({_id: idAuthor});
            if(author){
                await Author.updateOne({_id: idAuthor}, req.body);
                res.status(200).json({message: 'Updated author success'});   
            }
            else{
                res.status(404).json({message: 'Author not found'});   
            }
        }
        catch(err){
            res.status(500).json(err);
        }
    }

    async deleteAuthor(req, res) {
        try{
            const idAuthor = req.params.id;
            const author = await Author.findById({_id: idAuthor});
            if(author){
                await Book.updateMany({authors: idAuthor}, {$pull: {authors: idAuthor}});
                Author.deleteOne({_id: idAuthor}, (err, result) => {
                    if(err){
                        res.status(500).json(err);
                    }
                    else{
                        res.status(200).json({message: "Deleted author success"});
                    }
                });
            }
            else{
                res.status(404).json({message: 'Author not found'});   
            }
        }
        catch(err){
            res.status(500).json(err);
        }
    }
}

module.exports = new authorController();