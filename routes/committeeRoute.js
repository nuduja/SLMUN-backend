const express = require('express')
const Posts = require('../models/committeeModel');

const router = express.Router();

router.post('/post/save',(req,res)=>{

    let newPost = new Posts(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });

});

router.get('/posts',(req,res)=>{

    Posts.find().exec((err,posts) => {
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        })
    });
});

// router.put('/post/update/:id',(req,res) =>{
//     Posts.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }

//             return res.status(200).json({
//                 success:"Updated Succesfully"
//             });
//         }
        
//     );
// });

router.delete('/post/delete/:id',(req,res) =>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
       
        if(err) return res.staus(400).json({
            message:"Delete unsuccessful",err
        });
        
        return res.json({
            message:"Delete Succesfull",deletedPost
        });
    }); 
});

router.get("/post/:id",(req,res) =>{
    
    let postId = req.params.id;

    Posts.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        })
    })
})
module.exports = router;
