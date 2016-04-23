package org.stjoes.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/shows")
public class Shows {

    @RequestMapping(method = RequestMethod.GET, path = "", produces = "application/json")
    @ResponseBody
    public String getShows() {
        return "[\n" +
                "{\n" +
                "  \"id\" : 1,\n" +
                "  \"name\": \"The Devil In Cold Spring\",\n" +
                "  \"image\": \"static/images/shows/dcs.jpg\",\n" +
                "  \"description\": \"When Tommy and Margie's fighting gets out of hand, Tommy makes a deal with the devil. He gets sent back in time to find his one true love.\",\n" +
                "  \"year\": \"2016\",\n" +
                "  \"isCurrent\": true\n" +
                "},\n" +
                "{\n" +
                "  \"id\" : 2,\n" +
                "  \"name\": \"Under the Starry Sky\",\n" +
                "  \"image\": \"static/images/shows/utss.jpg\",\n" +
                "  \"description\": \"Four competing groups prepare for the summer camp of their lives!\",\n" +
                "  \"year\": \"2014\",\n" +
                "  \"isCurrent\": false\n" +
                "},\n" +
                "{\n" +
                "  \"id\" : 3,\n" +
                "  \"name\": \"Now you see it\",\n" +
                "  \"image\": \"http://placehold.it/400x300\",\n" +
                "  \"description\": \"A down on his luck magician keeps 'losing' his assistants.\";\n" +
                "  \"year\": \"2015\",\n" +
                "  \"isCurrent\": false;\n" +
                "},\n" +
                "{\n" +
                "  \"id\" : 4,\n" +
                "  \"name\": \"A Kiss From a Vampire\",\n" +
                "  \"image\": \"http://placehold.it/400x300\",\n" +
                "  \"description\": \"Think Twilight but funny\",\n" +
                "  \"year\": \"2013\",\n" +
                "  \"isCurrent\": false\n" +
                "},\n" +
                "{\n" +
                "  \"id\" : 5,\n" +
                "  \"name\": \"Is There a Doctor in the House?\",\n" +
                "  \"image\": \"http://placehold.it/400x300\",\n" +
                "  \"description\": \"Medical Dramedy\",\n" +
                "  \"year\": \"2012\",\n" +
                "  \"isCurrent\": false\n" +
                "},\n" +
                "]";
    }
}
