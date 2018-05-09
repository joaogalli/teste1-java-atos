package joaogalli.atos.teste1;

import joaogalli.atos.teste1.model.Employee;
import joaogalli.atos.teste1.model.Project;
import joaogalli.atos.teste1.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

@SpringBootApplication
public class Teste1Application implements CommandLineRunner {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private MongoTemplate mongoTemplate;

	public static void main(String[] args) {
		SpringApplication.run(Teste1Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		Employee e = new Employee();
		e.setName("Joao 3");
		e.setRole("Somente java e rest");
		e.getSkills().add("java");
//		e.getSkills().add("oracle");
		e.getSkills().add("rest");

//		e.getProjects().add(new Project("Project 1", "Customer 1", "1.000.000,00", "2016-11-05T08:15:30-05:00", "2017-11-05T08:15:30-05:00"));

//		employeeRepository.save(e);

//		List<Employee> employees = mongoTemplate.find(Query.query(Criteria.where("skills").in("java", "oracle")), Employee.class);
//		employees.stream().forEach(System.out::println);
	}
}
