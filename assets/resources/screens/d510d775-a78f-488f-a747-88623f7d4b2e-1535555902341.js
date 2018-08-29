jQuery("#simulation")
  .on("click", ".s-d510d775-a78f-488f-a747-88623f7d4b2e .click", function(event, data) {
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
                    "#s-d510d775-a78f-488f-a747-88623f7d4b2e #s-Image_1 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-d510d775-a78f-488f-a747-88623f7d4b2e #s-Image_1": {
                      "attributes": {
                        "opacity": "0.6"
                      }
                    }
                  },{
                    "#s-d510d775-a78f-488f-a747-88623f7d4b2e #s-Image_1": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                        "filter": "alpha(opacity=60)"
                      }
                    }
                  },{
                    "#s-d510d775-a78f-488f-a747-88623f7d4b2e #s-Image_1": {
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
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_4" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-inhaler_button_area" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "276"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "13"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 700
                    }
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-inhaler_button_area")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d510d775-a78f-488f-a747-88623f7d4b2e #s-spiro_highlight": {
                      "attributes": {
                        "opacity": "0.0"
                      }
                    }
                  },{
                    "#s-d510d775-a78f-488f-a747-88623f7d4b2e #s-spiro_highlight": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
                      }
                    }
                  },{
                    "#s-d510d775-a78f-488f-a747-88623f7d4b2e #s-spiro_highlight": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
                        "filter": "alpha(opacity=0)"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d510d775-a78f-488f-a747-88623f7d4b2e #s-inhaler_highlight": {
                      "attributes": {
                        "opacity": "0.35"
                      }
                    }
                  },{
                    "#s-d510d775-a78f-488f-a747-88623f7d4b2e #s-inhaler_highlight": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=35)",
                        "filter": "alpha(opacity=35)"
                      }
                    }
                  },{
                    "#s-d510d775-a78f-488f-a747-88623f7d4b2e #s-inhaler_highlight": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=35)",
                        "filter": "alpha(opacity=35)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 50
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56190187-e233-45d6-a881-5dc9cfe55607",
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
  })
  .on("pageload", ".s-d510d775-a78f-488f-a747-88623f7d4b2e .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "97"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "53"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeOutQuad",
                      "duration": 1000
                    }
                  },
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Image_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "142"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "52"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
                    "effect": {
                      "type": "fade",
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
          "delay": 2500
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Text_2","#s-Image_2" ],
                    "effect": {
                      "type": "fade",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 5000
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_2" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "85"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "46"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_2" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeInQuad",
                      "duration": 1000
                    }
                  },
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Group_3" ],
                    "top": {
                      "type": "movetoposition",
                      "value": "397"
                    },
                    "left": {
                      "type": "movetoposition",
                      "value": "14"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_3" ],
                    "effect": {
                      "type": "fade",
                      "easing": "easeInQuad",
                      "duration": 1000
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 2000
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });