package joaogalli.atos.teste1.model;

public class Project {

    private String name;

    private String customer;

    private String valueOfProject;

    private String dtBegin;

    private String dtEnd;

    public Project() {
    }

    public Project(String name, String customer, String valueOfProject, String dtBegin, String dtEnd) {
        this.name = name;
        this.customer = customer;
        this.valueOfProject = valueOfProject;
        this.dtBegin = dtBegin;
        this.dtEnd = dtEnd;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    public String getValueOfProject() {
        return valueOfProject;
    }

    public void setValueOfProject(String valueOfProject) {
        this.valueOfProject = valueOfProject;
    }

    public String getDtBegin() {
        return dtBegin;
    }

    public void setDtBegin(String dtBegin) {
        this.dtBegin = dtBegin;
    }

    public String getDtEnd() {
        return dtEnd;
    }

    public void setDtEnd(String dtEnd) {
        this.dtEnd = dtEnd;
    }
}
