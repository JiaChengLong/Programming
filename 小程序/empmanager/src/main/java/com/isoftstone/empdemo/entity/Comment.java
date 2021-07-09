package com.isoftstone.empdemo.entity;

public class Comment {
    private Integer id;
    private String username;
    private String content;

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", content='" + content + '\'' +
                '}';
    }

    public Comment(Integer id, String username, String content) {
        this.id = id;
        this.username = username;
        this.content = content;
    }

    public Comment() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
