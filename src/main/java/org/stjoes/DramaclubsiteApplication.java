package org.stjoes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Configuration
@ComponentScan
@EnableAutoConfiguration
public class DramaclubsiteApplication {

	public static void main(String[] args) {
		SpringApplication.run(DramaclubsiteApplication.class, args);
	}
}

@Controller
class HomeController
{
	@RequestMapping("/")
	public String home() {
		return "index.html";
	}
}