package com.isoftstone.empdemo.entity;
public class Img {
    private String id;
    private String name;
    private Double size;
    private String path;
    private String realPath;

    public Img() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
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

    public Img(String id, String name, Double size, String path, String realPath) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.path = path;
        this.realPath = realPath;
    }

    @Override
    public String toString() {
        return "Img{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", size=" + size +
                ", path='" + path + '\'' +
                ", realPath='" + realPath + '\'' +
                '}';
    }
}
