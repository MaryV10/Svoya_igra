const TopicService = require("../services/topicService");



async function getTopicController(req, res) {
    try {
      const topics = await TopicService.getAllTopics();
    res.status(200).json(topics);  
    } catch (error) {
        res.status(500).json({ message: error.message });  
    }
    
}

module.exports = {
   getTopicController
}