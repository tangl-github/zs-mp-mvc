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
}
