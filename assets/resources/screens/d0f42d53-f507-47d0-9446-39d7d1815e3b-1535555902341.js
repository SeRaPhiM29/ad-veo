jQuery("#simulation")
  .on("click", ".s-d0f42d53-f507-47d0-9446-39d7d1815e3b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d0f42d53-f507-47d0-9446-39d7d1815e3b #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d0f42d53-f507-47d0-9446-39d7d1815e3b #s-Image_4": {
                      "attributes": {
                        "opacity": "0.6"
                      }
                    }
                  },{
                    "#s-d0f42d53-f507-47d0-9446-39d7d1815e3b #s-Image_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                        "filter": "alpha(opacity=60)"
                      }
                    }
                  },{
                    "#s-d0f42d53-f507-47d0-9446-39d7d1815e3b #s-Image_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                        "filter": "alpha(opacity=60)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2bb6ce43-6605-44f7-872d-adab5b44b419",
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 500
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });