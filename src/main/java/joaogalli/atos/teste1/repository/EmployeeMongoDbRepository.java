package joaogalli.atos.teste1.repository;

import joaogalli.atos.teste1.model.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Collection;
import java.util.List;

public interface EmployeeMongoDbRepository extends MongoRepository<Employee, String> {

    List<Employee> findBySkillsIn(Collection<String> skill);

}
