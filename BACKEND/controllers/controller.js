    const Tem = require('../models/tem.model.js');
    // Create and Save a new Tutorial
    exports.create = async (req, res) => {
        console.log("req.body", req.body.email);
        if (!req.body.email) {
            res.status(400).send({ message: "Content can not be empty!" });
            return;
        }
        try {
            await Tem.create({
                email: req.body.email,
            })
            console.log("Data inserted successfully", req.body.email);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    exports.findAll = async (req, res) => {
        
    };


    // Update a Tutorial by the id in the request
    exports.update = (req, res) => {
        if (!req.body.email) {
            res.status(400).send({ message: "Content can not be empty!" });
            return;
        }
        Tem.findOneAndUpdate(req.params.email, {
            email: req.body.email,
        })
    };

    // Delete a Tutorial with the specified id in the request
    exports.delete = (req, res) => {  
        Tem.findOneAndDelete(req.params.email);
    };

// Delete all Tutorials from the database.
exports.deleteAll = async () => {
    try {
        await Tem.deleteMany({
            
        });
        console.log("Data deleted successfully");
    } catch (error) {
        console.error('Error:', error);
      }
};