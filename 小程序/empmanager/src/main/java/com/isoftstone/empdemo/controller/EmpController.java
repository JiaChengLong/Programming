package com.isoftstone.empdemo.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import com.isoftstone.empdemo.entity.Emp;
import com.isoftstone.empdemo.mapper.EmpMapper;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class EmpController {
	
	@Autowired
	private EmpMapper empMapper;

	@Value("${file.upload.path}")
	private String filePath;

	@ResponseBody
	@RequestMapping("/listEmp")
	public List<Emp> listEmp(ModelMap model){
		
		List<Emp> emps = empMapper.listEmp();
		model.put("emps", emps);
		
		return emps;
	}
	
	@RequestMapping("/index")
	public String index(){
		return "index";
	}
	
	@RequestMapping("/table")
	public String table(ModelMap model){
		List<Emp> emps = empMapper.listEmp();
		model.put("emps", emps);
		return "table";
	}
	//跳转到添加表单
	@RequestMapping("/addEmpForm")
	public String addEmpForm(){

		return "addEmp";
	}

	//保存添加的信息
	@RequestMapping(value = "/addEmp",method=RequestMethod.POST)
	public String addEmp(Emp emp){

		empMapper.addEmp(emp);

		//重定向
		return "redirect:table";
	}

	//跳转到修改页面
	@RequestMapping("/updateEmpForm")
	public String updateEmpForm(Integer empId,ModelMap model){

		Emp emp = empMapper.findEmpById(empId);
		model.put("emp",emp);
		return "updateEmp";
	}

	//跳转到修改页面
	@RequestMapping("/updateEmp")
	public String updateEmp(Emp emp){

		empMapper.updateEmp(emp);

		return "redirect:table";
	}

	//根据id删除员工
	@RequestMapping("/deleteEmp")
	public String deleteEmp(Integer empId){

		empMapper.deleteEmp(empId);

		return "redirect:table";
	}


	@ResponseBody
	@RequestMapping("/showData")
	public List<Emp> showData(){

		List<Emp> emps = empMapper.listEmp();

		return emps;
	}

}
