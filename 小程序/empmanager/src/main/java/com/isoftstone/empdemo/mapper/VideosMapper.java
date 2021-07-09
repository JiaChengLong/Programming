package com.isoftstone.empdemo.mapper;

        import com.isoftstone.empdemo.entity.Videos;
        import org.apache.ibatis.annotations.Insert;
        import org.apache.ibatis.annotations.Mapper;
        import org.apache.ibatis.annotations.Param;
        import org.apache.ibatis.annotations.Select;

        import java.util.List;

/**
 * description: VideosMapper <br>
 * date: 2021/6/21 9:03 <br>
 * author: DaTao <br>
 * version: 1.0 <br>
 */
@Mapper
public interface VideosMapper {

    @Insert("insert into videos(id,name,size,path,real_path) values(null,#{video.name},#{video.size},#{video.path},#{video.realPath})")
    public void addVideo(@Param("video") Videos videos);


    @Select("select id,name,size,path,real_path from videos")
    public List<Videos> listVideos();

}
