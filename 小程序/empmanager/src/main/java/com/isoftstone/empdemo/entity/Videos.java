package com.isoftstone.empdemo.entity;

/**
 * description: Videos <br>
 * date: 2021/6/21 9:01 <br>
 * author: DaTao <br>
 * version: 1.0 <br>
 */
public class Videos {

    private Integer id;
    private String name;
    private Double size;
    private String path;
    private String realPath;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getSize() {
        return size;
    }

    public void setSize(Double size) {
        this.size = size;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getRealPath() {
        return realPath;
    }

    public void setRealPath(String realPath) {
        this.realPath = realPath;
    }
}
