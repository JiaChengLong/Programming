package com.isoftstone.empdemo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.*;

import com.isoftstone.empdemo.entity.Emp;

@Mapper
public interface EmpMapper {
	
	@Select("select id,name,age,salary,dept,phone,birthday,addtime from emp ")
	public List<Emp> listEmp();

	@Insert("insert into emp(id,name,age,salary,dept,phone,birthday,addtime) values(null,#{emp.name},#{emp.age},#{emp.salary},#{emp.dept},#{emp.phone},#{emp.birthday},#{emp.addtime})")
	public void addEmp(@Param("emp") Emp emp);

	@Select("select id,name,age,salary,dept,phone,birthday,addtime from emp where id=#{id}")
	public Emp findEmpById(@Param("id") Integer empId);

	@Update("update emp set name=#{emp.name},age=#{emp.age},salary=#{emp.salary},dept=#{emp.dept},phone=#{emp.phone},birthday=#{emp.birthday},addtime=#{emp.addtime} where id=#{emp.id}")
	public void updateEmp(@Param("emp")Emp emp);

	@Delete("delete from emp where id = #{id}")
	public void deleteEmp(@Param("id")Integer empId);

}
