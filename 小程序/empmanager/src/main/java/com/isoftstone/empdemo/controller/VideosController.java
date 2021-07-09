package com.isoftstone.empdemo.controller;

import com.isoftstone.empdemo.entity.Img;
import com.isoftstone.empdemo.entity.Videos;
import com.isoftstone.empdemo.mapper.EmpMapper;
import com.isoftstone.empdemo.mapper.ImgMapper;
import com.isoftstone.empdemo.mapper.VideosMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

/**
 * description: VideosController <br>
 * date: 2021/6/21 9:06 <br>
 * author: DaTao <br>
 * version: 1.0 <br>
 */
@Controller
public class VideosController {

    /**上传地址*/
    @Value("${file.upload.path}")
    private String filePath;

    /**显示相对地址*/
    @Value("${file.upload.relative}")
    private String fileRelativePath;

    @Autowired
    private VideosMapper videosMapper;

    @Autowired
    private ImgMapper imgMapper;

    @RequestMapping("/addVideoForm")
    public String addVideoForm(){

        return "videos/add";
    }


    @RequestMapping(value = "/addVideo",method = RequestMethod.POST)
    public String addVideo(Videos videos, MultipartFile upfile) throws IOException {

        String filename = upfile.getOriginalFilename();
        File file = new File(filePath+"/"+filename);

        String realPath = file.getPath();
        Double size = file.length()/1024.0/1024;

        videos.setName(filename);
        videos.setSize(size);
        videos.setRealPath(realPath);

        String t = fileRelativePath.substring(0,fileRelativePath.length()-3);
        videos.setPath(t+"/"+filename);
        //将文件保存到指定文件夹
        upfile.transferTo(file);


        videosMapper.addVideo(videos);

        return "videos/list";
    }

    @ResponseBody
    @RequestMapping("/listVideos")
    public List<Videos> listVideos(){

        return videosMapper.listVideos();
    }

    @ResponseBody
    @RequestMapping("/listImg")
    public List<Img> findAll(){
        return imgMapper.findAll();
    }



    @RequestMapping(value = "/addImg",method = RequestMethod.POST)
    public String addImg(Img img, MultipartFile upfile) throws IOException {
        String filename1 = upfile.getOriginalFilename();
        filename1 = filename1.substring(0,filename1.lastIndexOf("."));
        File file1 = new File(filePath+"/imgs/"+filename1);

        String realPath = file1.getPath();
        Double size = file1.length()/1024.0/1024;

        img.setName(filename1);
        img.setSize(size);
        img.setRealPath(realPath);

        String t = fileRelativePath.substring(0,fileRelativePath.length()-3);
        img.setPath(t+"/imgs/"+filename1);
        //将文件保存到指定文件夹
        upfile.transferTo(file1);

        imgMapper.addImg(img);
        return "videos/list";
    }
}
