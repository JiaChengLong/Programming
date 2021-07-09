package com.isoftstone.empdemo.mapper;

import com.isoftstone.empdemo.entity.Comment;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface CommentMapper {
    @Select("select username,content from comment")
    List<Comment> listComment();




    @Insert("insert into comment(username,content) values(#{username},#{content})")
    void addComment(@Param("username")String username,@Param("content") String content);
}
