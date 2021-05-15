package controllers;

import models.Researchers;
import dataBaseConnector.Connector;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class ResearchersController {

	Connector con = Connector.getInstance();

	private ResearchersController() {
	}

	private static final ResearchersController obj = new ResearchersController();

	public static ResearchersController getInstance() {
		return obj;
	}

	public void Save(Researchers data) throws Exception {
		con.getConnection();
		con.aud("INSERT INTO researchers(name,qualifications,country,email,contact_number,interested_research_areas) values ('"
				+ data.getName() + "','" + data.getQualifications() + "','" + data.getCountry() + "','"
				+ data.getEmail() + "','" + data.getContact_number() + "','" + data.getInterested_research_areas()
				+ "') ");
	}

	public void Update(Researchers data) throws Exception {
		con.getConnection();
		con.aud("UPDATE researchers SET name  = '" + data.getName() + "',qualifications  = '" + data.getQualifications()
				+ "',country  = '" + data.getCountry() + "',email  = '" + data.getEmail() + "',contact_number  = '"
				+ data.getContact_number() + "',interested_research_areas  = '" + data.getInterested_research_areas()
				+ "' WHERE researchers_id = '" + data.getResearchers_id() + "'");
	}

	public void Delete(Researchers data) throws Exception {
		con.getConnection();
		con.aud("DELETE FROM researchers WHERE researchers_id = '" + data.getResearchers_id() + "'");
	}

	public List<Researchers> SearchAll() throws Exception {
		List<Researchers> objList = new ArrayList<Researchers>();
		con.getConnection();
		ResultSet rset = con.srh("SELECT * FROM researchers");
		while (rset.next()) {
			Researchers obj = new Researchers();
			obj.setResearchers_id(rset.getInt(1));
			obj.setName(rset.getString(2));
			obj.setQualifications(rset.getString(3));
			obj.setCountry(rset.getString(4));
			obj.setEmail(rset.getString(5));
			obj.setContact_number(rset.getString(6));
			obj.setInterested_research_areas(rset.getString(7));
			objList.add(obj);
		}

		return objList;
	}

	public List<Researchers> Search(Researchers data) throws Exception {
		List<Researchers> objList = new ArrayList<Researchers>();
		con.getConnection();
		ResultSet rset = con.srh("SELECT * FROM researchers WHERE researchers_id = '" + data.getResearchers_id() + "'");
		while (rset.next()) {
			Researchers obj = new Researchers();
			obj.setResearchers_id(rset.getInt(1));
			obj.setName(rset.getString(2));
			obj.setQualifications(rset.getString(3));
			obj.setCountry(rset.getString(4));
			obj.setEmail(rset.getString(5));
			obj.setContact_number(rset.getString(6));
			obj.setInterested_research_areas(rset.getString(7));
			objList.add(obj);
		}

		return objList;
	}

}