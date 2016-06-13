var chartservice = function(){
  var chart = {
                "type": "LineChart",
                "options": {
                    "title": "Lines to horizon",
                    "pointSize": 7,
                    "width" : 500,
                    "height":300,
                    "chartArea": {left:80,top:80,width:"70%",height:"70%"},
                    "vAxis": {
                        "title": "Vertical Data",
                        "gridlines": {
                            "count": 10
                        }
                    },
                    "hAxis": {
                        "title": "Horizontal Data"
                    }
                },
                "data": {
                    "cols": [
                        {
                            "id": "head",
                            "label": "Label for HEAD",
                            "type": "number",
                            "p": {}
                        },
                        {
                            "id": "line1",
                            "label": "Line 1",
                            "type": "number",
                            "p": {}
                        },
                        {
                            "id": "line2",
                            "label": "Line 2",
                            "type": "number",
                            "p": {}
                        },
                        {
                            "id": "line3",
                            "label": "Line 3",
                            "type": "number",
                            "p": {}
                        },
                        {
                            "id": "line4",
                            "label": "Line 4",
                            "type": "number",
                            "p": {}
                        },
                        {
                            "id": "line5",
                            "label": "Line 5",
                            "type": "number",
                            "p": {}
                        },
                    ]}
            };
            return chart;
}

app.factory('chartservice',chartservice);
