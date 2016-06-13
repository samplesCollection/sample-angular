var barchartservice = function() {
  var chart = {
    "type": "BarChart",
    "options": {
      "title": "Exchanges Brazil",
      "pointSize": 100,
      "width": 500,
      "height": 400,
      "chartArea": {
        left: 90,
        top: 80,
        width: "50%",
        height: "70%"
      }
    },
    "data": {
      "cols": [{
        "id": "",
        "label": "exchange",
        "pattern":"",
        "type": "string"
      }, {
        "id": "",
        "label": "Preço",
        "pattern":"",
        "type": "number"
      }],
      "rows" : [
        {"c" : [{"v" : "Mercado", "f": null},{"v" : 2236, "f": null}]},
        {"c" : [{"v" : "Negocie Coins", "f": null},{"v" : 2200, "f": null}]},
        {"c" : [{"v" : "Bitcointoyou", "f": null},{"v" : 2210, "f": null}]},
        {"c" : [{"v" : "Fox", "f": null},{"v" : 2245, "f": null}]}
      ]
    }
  };
  return chart;
}

app.factory('barchartservice', barchartservice);
