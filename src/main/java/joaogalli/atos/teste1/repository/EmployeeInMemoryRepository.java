package joaogalli.atos.teste1.repository;

import joaogalli.atos.teste1.model.Employee;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Component
public class EmployeeInMemoryRepository {

    private List<Employee> repository = new ArrayList<>();

    public void deleteAll() {
        repository.clear();
    }

    public void save(Employee employee) {
        repository.add(employee);
    }


    public List<Employee> findAll() {
        return new ArrayList<>(repository);
    }

    public List<Employee> findBySkillsIn(Collection<String> skills) {
        return repository
                .stream()
                .filter(employee -> !Collections.disjoint(employee.getSkills(), skills))
                .collect(Collectors.toList());
    }

}
