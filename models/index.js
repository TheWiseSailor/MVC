const User = require("./User");
const Comments = require("./Comments");
const Post = require("./Post");

User.hasMany(Post, { as: "posts" });
Post.belongsTo(User, { as: "user" });
Post.hasMany(Comments, { as: "comments" });
Comments.belongsTo(User, { as: "user" });
Comments.belongsTo(Post, { as: "post" });

module.exports = { User, Comments, Post };
