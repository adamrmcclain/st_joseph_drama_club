package org.stjoes.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/v1/castandcrew")
public class CastAndCrew {

    @RequestMapping(method = RequestMethod.GET, path = "", produces = "application/json")
    @ResponseBody
    public String getCastAndCrew() {
        return "[\n" +
                "{\"id\": 1,\n" +
                "\"name\": \"Lauren McClain\",\n" +
                "\"image\": \"static/images/cast/lauren.jpg\",\n" +
                "  \"description\": \"Lauren has been a part of St. Joseph Drama Club on and off since 2007. She has her Bachelors in French from NKU and a Master in Business Informatics from NKU. She currently works at Kroger on their web team. She's married and lives with her three cats. I really just need to see this text wrap so I know that it works and I'm running out of things to type.Text Text Text Text Text Text Text Text Text\",\n" +
                "  \"isOfficer\": false,\n" +
                "  \"officePosition\": \"\"\n" +
                "},\n" +
                "{\"id\": 2,\n" +
                "\"name\": \"Narco\",\n" +
                "\"image\": \"http://placehold.it/400x300\",\n" +
                "\"description\": \"Description to be provided by cast member\",\n" +
                "\"isOfficer\": true,\n" +
                "\"officePosition\" : \"President\"\n" +
                "},\n" +
                "{\"id\": 3,\n" +
                "\"name\": \"Bombasto\",\n" +
                "\"image\": \"http://placehold.it/400x300\",\n" +
                "\"description\": \"Description to be provided by cast member\",\n" +
                "\"isOfficer\": true,\n" +
                "\"officePosition\" : \"Vice President\"\n" +
                "},\n" +
                "{\"id\": 4,\n" +
                "\"name\": \"Celeritas\",\n" +
                "\"image\": \"http://placehold.it/400x300\",\n" +
                "\"description\": \"Description to be provided by cast member\",\n" +
                "\"isOfficer\": false,\n" +
                "\"officePosition\" : \"\"},\n" +
                "{\"id\": 5,\n" +
                "\"name\": \"Magneta\",\n" +
                "\"image\": \"http://placehold.it/400x300\",\n" +
                "\"description\": \"Description to be provided by cast member\",\n" +
                "\"isOfficer\" : false,\n" +
                "\"officePosition\" : \"\"},\n" +
                "{\"id\": 6,\n" +
                "\"name\": \"RubberMan\",\n" +
                "\"image\": \"http://placehold.it/400x300\",\n" +
                "\"description\": \"Description to be provided by cast member\",\n" +
                "\"isOfficer\" : true,\n" +
                "\"officePosition\" : \"Treasurer\"},\n" +
                "{\"id\": 7, \"name\": \"Dynama\", \"image\": \"http://placehold.it/400x300\", \"description\": \"Description to be provided by cast member\", \"isOfficer\": false, \"officePosition\" : \"\"},\n" +
                "{\"id\": 8, \"name\": \"Dr IQ\", \"image\": \"http://placehold.it/400x300\", \"description\": \"Description to be provided by cast member\", \"isOfficer\": false, \"officePosition\" : \"\"},\n" +
                "{\"id\": 9, \"name\": \"Magma\", \"image\": \"http://placehold.it/400x300\", \"description\": \"Description to be provided by cast member\", \"isOfficer\": false, \"officePosition\" : \"\"},\n" +
                "{\"id\": 10, \"name\": \"Tornado\", \"image\": \"http://placehold.it/400x300\", \"description\": \"Description to be provided by cast member\", \"isOfficer\": false, \"officePosition\" : \"\"}\n" +
                "];\n";
    }
}
