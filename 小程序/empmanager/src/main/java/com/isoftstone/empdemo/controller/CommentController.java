package com.isoftstone.empdemo.controller;

import com.isoftstone.empdemo.entity.Comment;
import com.isoftstone.empdemo.mapper.CommentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class CommentController {
    @Autowired
    private CommentMapper commentMapper;

    @RequestMapping("/listComment")
    @ResponseBody
    public List<Comment> listComment(){
        return commentMapper.listComment();
    }
    @RequestMapping(value = "addComment")
    public void addComment(String username,String content){
        commentMapper.addComment(username,content);
    }
}
