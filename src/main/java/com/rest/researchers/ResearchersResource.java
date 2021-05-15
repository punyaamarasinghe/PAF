package com.rest.researchers;

import models.Researchers;
import controllers.ResearchersController;

import java.util.List;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("ResearchersResources")
public class ResearchersResource {

	@GET
	@Path("Researcherss")
	@Produces({ MediaType.APPLICATION_JSON })
	public List<Researchers> getAllResearcherss() throws Exception {
		return ResearchersController.getInstance().SearchAll();
	}

	@GET
	@Path("Researchers/{researchers_id}")
	@Produces({ MediaType.APPLICATION_JSON })
	public List<Researchers> getResearchers(@PathParam("researchers_id") int researchers_id) throws Exception {
		Researchers obj = new Researchers();
		obj.setResearchers_id(researchers_id);
		return ResearchersController.getInstance().Search(obj);
	}

	@POST
	@Path("Researchers")
	public String saveResearchers(Researchers obj) throws Exception {
		ResearchersController.getInstance().Save(obj);
		return "Researchers Saved";
	}

	@PUT
	@Path("Researchers")
	public String updateResearchers(Researchers obj) throws Exception {
		ResearchersController.getInstance().Update(obj);
		return "Researchers Updated";
	}

	@DELETE
	@Path("Researchers/{researchers_id}")
	public String deleteResearchers(@PathParam("researchers_id") int researchers_id) throws Exception {
		Researchers obj = new Researchers();
		obj.setResearchers_id(researchers_id);
		ResearchersController.getInstance().Delete(obj);
		return "Researchers Deleted";
	}
}