const Bug = require("../models/Bug");

exports.createBug = async (req, res) => {
  try {
    const bug = await Bug.create({
      title: req.body.title,
      description: req.body.description,
      priority: req.body.priority,
      createdBy: req.user.id,
    });

    res.status(201).json({ message: "Bug created", bug });
  } catch (error) {
    res.status(500).json({ message: "Error creating bug", error });
  }
};

exports.getBugs = async (req, res) => {
  try {
    const bugs = await Bug.find()
      .populate("createdBy", "name email")
      .sort({ createdAt: -1 });

    res.json(bugs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bugs", error });
  }
};
