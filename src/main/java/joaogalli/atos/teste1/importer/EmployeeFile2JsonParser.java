package joaogalli.atos.teste1.importer;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.google.gson.stream.JsonReader;
import joaogalli.atos.teste1.model.Employee;
import org.springframework.stereotype.Component;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.util.List;

@Component
public class EmployeeFile2JsonParser {

    public List<Employee> parseInternalFile(String filePath) {
        Type REVIEW_TYPE = new TypeToken<List<Employee>>() {}.getType();
        Gson gson = new Gson();

        InputStream in = getClass().getResourceAsStream(filePath);
        BufferedReader reader = new BufferedReader(new InputStreamReader(in));
        JsonReader jsonreader = new JsonReader(reader);
        return gson.fromJson(jsonreader, REVIEW_TYPE);
    }

}
