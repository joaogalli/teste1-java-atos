package joaogalli.atos.teste1.controller;

import joaogalli.atos.teste1.model.Employee;
import joaogalli.atos.teste1.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("api/employee")
@RestController
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @RequestMapping(value = "/getAllEmployees", method = RequestMethod.GET)
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @RequestMapping(value = "/findEmployeesBySkill", method = RequestMethod.POST)
    public List<Employee> findBySkill(@RequestBody FindEmployeesBySkillsFilterRequestBody filter) {
        return employeeRepository.findBySkillsIn(filter.getSkills());
    }

}
