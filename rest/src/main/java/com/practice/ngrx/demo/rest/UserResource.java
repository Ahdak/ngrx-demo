package com.practice.ngrx.demo.rest;

import com.practice.ngrx.demo.core.domain.User;
import com.practice.ngrx.demo.core.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.List;

import static javax.ws.rs.core.MediaType.APPLICATION_JSON;
import static javax.ws.rs.core.Response.Status.OK;

@Component
@Path("/users")
@Consumes(APPLICATION_JSON)
@Produces(APPLICATION_JSON)
public class UserResource {

    private UserService userService;

    @Autowired
    public UserResource(UserService userService) {
        this.userService = userService;
    }

    @GET
    @Path("/all")
    @Consumes(APPLICATION_JSON)
    public Response books() {

        List<User> users = userService.getUsers();

        return Response.status(OK)
                .entity(users)
                .build();
    }

    @POST
    @Path("/save")
    public Response updateBook(List<User> users) {

        List<User> savedUsers = userService.saveUsers(users);

        return Response.status(OK)
                .entity(savedUsers)
                .build();
    }
}
