package models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Researchers {

	private int researchers_id;
	private String name;
	private String qualifications;
	private String country;
	private String email;
	private String contact_number;
	private String interested_research_areas;

	public Researchers() {
	}

	public Researchers(int researchers_id) {
		this.researchers_id = researchers_id;
	}

	public Researchers(int researchers_id, String name, String qualifications, String country, String email,
			String contact_number, String interested_research_areas) {
		this.researchers_id = researchers_id;
		this.name = name;
		this.qualifications = qualifications;
		this.country = country;
		this.email = email;
		this.contact_number = contact_number;
		this.interested_research_areas = interested_research_areas;
	}

	public int getResearchers_id() {
		return researchers_id;
	}

	public void setResearchers_id(int researchers_id) {
		this.researchers_id = researchers_id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getQualifications() {
		return qualifications;
	}

	public void setQualifications(String qualifications) {
		this.qualifications = qualifications;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact_number() {
		return contact_number;
	}

	public void setContact_number(String contact_number) {
		this.contact_number = contact_number;
	}

	public String getInterested_research_areas() {
		return interested_research_areas;
	}

	public void setInterested_research_areas(String interested_research_areas) {
		this.interested_research_areas = interested_research_areas;
	}

}