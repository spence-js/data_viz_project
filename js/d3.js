

const svg = d3.create("svg")

    d3.csv("./data/Medicaldataset.csv", patient_data => {
        let patient_data_obj = {}
        patient_data.forEach(patient => {
            Object.keys(patient).forEach(key => {
                if (key in patient_data_obj) {
                    patient_data_obj[key].push(patient[key])
                } else {
                    patient_data_obj[key] = [patient[key]]
                }
            })
        })
        console.log(patient_data_obj["Age"])
        
        svg.selectAll("p")
            .data(patient_data_obj["Age"])
            .join("p")
            BasicChart.append()
    })