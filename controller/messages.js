import Message from "../model/message.js";

const getMessages = async (req, res) => {
    try {
        const name = req.params.name;
        
        const message = await Message.find({name});
        if (message.length == 0) {
            res.status(404).json({msg: 'No message'});
        } else res.status(200).json(message);
    } catch (error) {
        res.status(500).json({msg: error});
    };
};

const createMessage = async (req, res) => {
    try {
        const {name, title, body} = req.body;
        const message = await Message.create({
            name,
            title,
            body,
        });

        res.status(200).json(message)
    } catch (error) {
        res.status(500).json({msg: error})
    }
}

export {getMessages, createMessage}
