package com.mvc.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 主页控制层
 * @author tangl
 * 2016-2-16 16:59:09
 */
@Controller
@RequestMapping("/")
public class IndexController extends BaseController{

	@RequestMapping(value = "index.shtml")
	public String index() {
		log.info("进入主页");
		return "index";
	}

	@RequestMapping(value = "class01.shtml")
	public String demo01() {
		log.info("class01");
		return "demo/require/class01";
	}

	@RequestMapping(value = "class02.shtml")
	public String demo02() {
		return "demo/require/class02";
	}
	@RequestMapping(value = "class03.shtml")
	public String demo03() {
		return "demo/require/class03";
	}
	@RequestMapping(value = "class04.shtml")
	public String demo04() {
		return "demo/require/class04";
	}
	@RequestMapping(value = "class05.shtml")
	public String demo05() {
		return "demo/require/class05";
	}
	@RequestMapping(value = "class06.shtml")
	public String demo06() {
		return "demo/require/class06";
	}


	@RequestMapping(value = "sea01.shtml")
	public String sea01() {
		return "demo/sea/sea01";
	}
}
