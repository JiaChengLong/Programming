package com.isoftstone.empdemo.mapper;

import com.isoftstone.empdemo.entity.Img;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;
@Mapper
public interface ImgMapper {
    @Select("select * from img")
    List<Img> findAll();


    @Insert("insert into img (id,name,size,path,real_Path) values (null,#{img.name},#{img.size},#{img.path},#{img.realPath})")
    void addImg(@Param("img") Img img);
}
