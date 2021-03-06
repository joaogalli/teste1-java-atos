package joaogalli.atos.teste1;

import joaogalli.atos.teste1.importer.EmployeeFile2JsonParser;
import joaogalli.atos.teste1.model.Employee;
import joaogalli.atos.teste1.model.Project;
import joaogalli.atos.teste1.repository.EmployeeInMemoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;
import java.util.List;

@SpringBootApplication
public class Teste1Application implements CommandLineRunner {

	@Autowired
	private EmployeeInMemoryRepository employeeRepository;

	@Autowired
	private EmployeeFile2JsonParser employeeFile2JsonParser;

	@Autowired
	private MongoTemplate mongoTemplate;

	public static void main(String[] args) {
		SpringApplication.run(Teste1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		employeeRepository.deleteAll();

		List<Employee> data = employeeFile2JsonParser.parseInternalFile("/employees.txt");
		data.stream().forEach(employeeRepository::save);
	}

	public Employee build(String name, String role, String salary, String... skills) {
		Employee e = new Employee();
		e.setName(name);
		e.setRole(role);
		e.setSalary(salary);
		e.getSkills().addAll(Arrays.asList(skills));
		e.getProjects().add(new Project("Project 1", "Customer 1", "1.000.000,00", "2016-11-05T08:15:30-05:00", "2017-11-05T08:15:30-05:00"));

		return e;
	}

	@Bean
	public FilterRegistrationBean corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.addAllowedOrigin("*");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		source.registerCorsConfiguration("/**", config);
		FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
		bean.setOrder(0);
		return bean;
	}
}
